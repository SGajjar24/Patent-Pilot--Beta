import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                PatentPilot: AI-Powered Patent Application Assistant
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Streamline your patent application process with our AI tools for drafting, searching prior art, and predicting approval likelihood.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <a href="/draft">Get Started</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/help">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icons.fileText className="h-5 w-5 text-blue-500" />
                  <CardTitle>AI Patent Draft</CardTitle>
                </div>
                <CardDescription>
                  Generate patent applications based on your invention details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Our AI system helps you create comprehensive patent drafts including descriptions, claims, and abstracts based on your invention details.
                </p>
                <Button className="mt-4" variant="outline" asChild>
                  <a href="/draft">Create Draft</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icons.search className="h-5 w-5 text-green-500" />
                  <CardTitle>Prior Art Search</CardTitle>
                </div>
                <CardDescription>
                  Analyze existing patents to determine novelty
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Our AI analyzes existing patents and literature to determine the novelty and patentability of your invention.
                </p>
                <Button className="mt-4" variant="outline" asChild>
                  <a href="/search">Search Prior Art</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icons.checkCircle className="h-5 w-5 text-purple-500" />
                  <CardTitle>Approval Prediction</CardTitle>
                </div>
                <CardDescription>
                  Predict the likelihood of patent approval
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Our AI predicts the likelihood of patent application approval based on your draft's content and structure, offering suggestions for improvement.
                </p>
                <Button className="mt-4" variant="outline" asChild>
                  <a href="/predict">Predict Approval</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Need Expert Guidance?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500">
                Connect with patent attorneys for expert advice and guidance on your patent application.
              </p>
            </div>
            <Button asChild>
              <a href="/consultation">Request Consultation</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
