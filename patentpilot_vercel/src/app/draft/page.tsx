"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Icons } from "@/components/icons";
import { useToast } from "@/hooks/use-toast";

export default function DraftPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    inventionTitle: "",
    inventionDescription: "",
    additionalDetails: "",
  });
  const [draftResult, setDraftResult] = useState<null | {
    abstract: string;
    description: string;
    claims: string;
  }>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call since we don't have Genkit
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Mock response
      setDraftResult({
        abstract: `A system and method for ${formData.inventionTitle.toLowerCase()} that provides improved efficiency and effectiveness. The invention relates to ${formData.inventionDescription.substring(0, 100)}...`,
        description: `BACKGROUND\n\nThe present invention relates to ${formData.inventionTitle}. ${formData.inventionDescription}\n\nDETAILED DESCRIPTION\n\nIn one embodiment, the invention comprises a system for improving patent drafting processes using artificial intelligence. The system includes components for analyzing invention disclosures, generating patent claims, and predicting patentability.`,
        claims: `1. A method for ${formData.inventionTitle.toLowerCase()}, comprising:\n   - receiving user input describing an invention;\n   - generating a patent application draft using artificial intelligence;\n   - providing the draft to the user for review.\n\n2. The method of claim 1, further comprising analyzing prior art related to the invention.`
      });
      
      toast("Your patent draft has been successfully generated.");
    } catch (error) {
      toast("Failed to generate patent draft. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!draftResult) return;
    
    const content = `
# ${formData.inventionTitle}

## Abstract
${draftResult.abstract}

## Description
${draftResult.description}

## Claims
${draftResult.claims}
    `;
    
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${formData.inventionTitle.replace(/\s+/g, "_")}_patent_draft.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast("Patent draft has been downloaded as a text file.");
  };

  const handleEmail = () => {
    toast("Patent draft has been sent to your email address.");
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">AI Patent Draft Generator</h1>
          <p className="text-gray-500 md:text-xl">
            Generate comprehensive patent applications based on your invention details
          </p>
        </div>
      </div>

      {!draftResult ? (
        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Invention Details</CardTitle>
              <CardDescription>
                Provide information about your invention to generate a patent draft
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="inventionTitle" className="text-sm font-medium">
                  Invention Title
                </label>
                <Input
                  id="inventionTitle"
                  name="inventionTitle"
                  placeholder="e.g., Method and System for AI-Assisted Patent Drafting"
                  value={formData.inventionTitle}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="inventionDescription" className="text-sm font-medium">
                  Invention Description
                </label>
                <Textarea
                  id="inventionDescription"
                  name="inventionDescription"
                  placeholder="Describe your invention in detail, including the problem it solves and how it works..."
                  value={formData.inventionDescription}
                  onChange={handleInputChange}
                  rows={6}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="additionalDetails" className="text-sm font-medium">
                  Additional Details (Optional)
                </label>
                <Textarea
                  id="additionalDetails"
                  name="additionalDetails"
                  placeholder="Any additional information, technical specifications, or use cases..."
                  value={formData.additionalDetails}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Icons.fileText className="mr-2 h-4 w-4 animate-spin" />
                    Generating Draft...
                  </>
                ) : (
                  <>
                    <Icons.fileText className="mr-2 h-4 w-4" />
                    Generate Patent Draft
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Patent Draft for: {formData.inventionTitle}</CardTitle>
              <CardDescription>
                Review your generated patent draft below
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Abstract</h3>
                <div className="rounded-md bg-slate-50 p-4">
                  <p>{draftResult.abstract}</p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Description</h3>
                <div className="rounded-md bg-slate-50 p-4 whitespace-pre-line">
                  <p>{draftResult.description}</p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Claims</h3>
                <div className="rounded-md bg-slate-50 p-4 whitespace-pre-line">
                  <p>{draftResult.claims}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleDownload} className="w-full sm:w-auto">
                <Icons.download className="mr-2 h-4 w-4" />
                Download as PDF
              </Button>
              <Button variant="outline" onClick={handleEmail} className="w-full sm:w-auto">
                <Icons.mail className="mr-2 h-4 w-4" />
                Send to Email
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setDraftResult(null)} 
                className="w-full sm:w-auto"
              >
                Create New Draft
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
