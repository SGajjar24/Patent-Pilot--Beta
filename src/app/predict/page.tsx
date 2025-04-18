"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Icons } from "@/components/icons";
import { useToast } from "@/hooks/use-toast";

export default function PredictPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [patentDraft, setPatentDraft] = useState("");
  const [predictionResult, setPredictionResult] = useState<null | {
    approvalLikelihood: number;
    suggestions: string;
  }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call since we don't have Genkit
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Mock response with random approval likelihood between 60-85%
      const approvalLikelihood = Math.floor(Math.random() * 26) + 60;
      
      setPredictionResult({
        approvalLikelihood,
        suggestions: `Based on our analysis of your patent draft, we have the following suggestions to improve approval likelihood:

1. Strengthen the claims section by being more specific about the unique aspects of your invention.
2. Expand the background section to better establish the problem your invention solves.
3. Include more detailed examples of how your invention works in practice.
4. Add diagrams or flowcharts to illustrate the technical process.
5. Clarify the distinction between your invention and existing prior art.`
      });
      
      toast("Approval likelihood prediction has been completed.");
    } catch (error) {
      toast("Failed to predict approval likelihood. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Approval Prediction</h1>
          <p className="text-gray-500 md:text-xl">
            Predict the likelihood of patent application approval and get suggestions for improvement
          </p>
        </div>
      </div>

      {!predictionResult ? (
        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Patent Draft</CardTitle>
              <CardDescription>
                Paste your patent draft to analyze approval likelihood
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Textarea
                  placeholder="Paste your complete patent draft here, including abstract, description, and claims..."
                  value={patentDraft}
                  onChange={(e) => setPatentDraft(e.target.value)}
                  rows={12}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Icons.checkCircle className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing Draft...
                  </>
                ) : (
                  <>
                    <Icons.checkCircle className="mr-2 h-4 w-4" />
                    Predict Approval Likelihood
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
              <CardTitle>Approval Likelihood</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold">{predictionResult.approvalLikelihood}%</span>
                  </div>
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle
                      className="text-gray-200"
                      strokeWidth="10"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="text-blue-500"
                      strokeWidth="10"
                      strokeDasharray={`${predictionResult.approvalLikelihood * 2.51} 251.2`}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                  </svg>
                </div>
                <p className="text-center">
                  {predictionResult.approvalLikelihood >= 80
                    ? "High likelihood of approval with minor revisions."
                    : predictionResult.approvalLikelihood >= 70
                    ? "Good likelihood of approval with moderate revisions."
                    : "Moderate likelihood of approval. Significant revisions recommended."}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Improvement Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-line">{predictionResult.suggestions}</p>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                onClick={() => setPredictionResult(null)} 
                className="w-full"
              >
                New Prediction
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
