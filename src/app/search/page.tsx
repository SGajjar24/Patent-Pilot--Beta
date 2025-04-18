"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Icons } from "@/components/icons";
import { useToast } from "@/hooks/use-toast";

export default function SearchPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<null | {
    noveltyAssessment: string;
    patentabilityChallenges: string;
    relevantPatents: Array<{
      title: string;
      abstract: string;
      url: string;
    }>;
  }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call since we don't have Genkit
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Mock response
      setSearchResults({
        noveltyAssessment: `Based on our analysis, your invention "${searchQuery}" appears to have several novel aspects, particularly in the implementation approach. However, there are some existing patents that cover similar concepts which may impact patentability.`,
        patentabilityChallenges: `The main challenges to patentability include:\n- Similar methods described in US10123456\n- Overlapping claims with EP3456789\n- Potential obviousness concerns when combining US9876543 and US8765432`,
        relevantPatents: [
          {
            title: "System and Method for Automated Patent Analysis",
            abstract: "A system for analyzing patent documents using machine learning algorithms to identify relevant prior art and assess patentability.",
            url: "https://patents.google.com/patent/US10123456"
          },
          {
            title: "AI-Based Patent Drafting System",
            abstract: "A computer-implemented method for generating patent application documents using artificial intelligence and natural language processing.",
            url: "https://patents.google.com/patent/EP3456789"
          },
          {
            title: "Method for Prior Art Search and Analysis",
            abstract: "A method for searching and analyzing prior art documents to determine novelty and non-obviousness of inventions.",
            url: "https://patents.google.com/patent/US9876543"
          }
        ]
      });
      
      toast("Prior art search has been completed successfully.");
    } catch (error) {
      toast("Failed to complete prior art search. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Prior Art Search</h1>
          <p className="text-gray-500 md:text-xl">
            Analyze existing patents to determine the novelty and patentability of your invention
          </p>
        </div>
      </div>

      {!searchResults ? (
        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Invention Description</CardTitle>
              <CardDescription>
                Describe your invention to search for relevant prior art
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Textarea
                  placeholder="Describe your invention in detail, including key features and technical aspects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  rows={8}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Icons.search className="mr-2 h-4 w-4 animate-spin" />
                    Searching Prior Art...
                  </>
                ) : (
                  <>
                    <Icons.search className="mr-2 h-4 w-4" />
                    Search Prior Art
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
              <CardTitle>Novelty Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{searchResults.noveltyAssessment}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Patentability Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-line">{searchResults.patentabilityChallenges}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Relevant Patents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {searchResults.relevantPatents.map((patent, index) => (
                <div key={index} className="border rounded-md p-4">
                  <h3 className="font-medium">{patent.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{patent.abstract}</p>
                  <a 
                    href={patent.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm mt-2 inline-block"
                  >
                    View Patent
                  </a>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                onClick={() => setSearchResults(null)} 
                className="w-full"
              >
                New Search
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
