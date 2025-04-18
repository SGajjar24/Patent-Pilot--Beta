"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Icons } from "@/components/icons";
import { useToast } from "@/hooks/use-toast";

export default function ConsultationPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inventionTitle: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitted(true);
      
      toast("Your consultation request has been submitted successfully.");
    } catch (error) {
      toast("Failed to submit consultation request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Expert Consultation</h1>
          <p className="text-gray-500 md:text-xl">
            Connect with patent attorneys for expert advice and guidance
          </p>
        </div>
      </div>

      {!submitted ? (
        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Request a Consultation</CardTitle>
              <CardDescription>
                Fill out the form below to connect with a patent expert
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
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
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe what you need help with and any specific questions you have..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Icons.phone className="mr-2 h-4 w-4 animate-spin" />
                    Submitting Request...
                  </>
                ) : (
                  <>
                    <Icons.phone className="mr-2 h-4 w-4" />
                    Request Consultation
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Request Submitted</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center justify-center py-6">
              <div className="rounded-full bg-green-100 p-3 mb-4">
                <Icons.checkCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-center">Thank you for your request!</h3>
              <p className="text-center text-gray-500 mt-2">
                We have received your consultation request and a patent expert will contact you within 1-2 business days at {formData.email} or {formData.phone}.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline" 
              onClick={() => setSubmitted(false)} 
              className="w-full"
            >
              Submit Another Request
            </Button>
          </CardFooter>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Why Choose Our Experts?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="rounded-full bg-blue-100 p-2 mt-1">
              <Icons.checkCircle className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Specialized Knowledge</h3>
              <p className="text-sm text-gray-500">Our patent attorneys have specialized knowledge in various technical fields.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="rounded-full bg-blue-100 p-2 mt-1">
              <Icons.checkCircle className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Personalized Guidance</h3>
              <p className="text-sm text-gray-500">Receive personalized guidance tailored to your specific invention and needs.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="rounded-full bg-blue-100 p-2 mt-1">
              <Icons.checkCircle className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Strategic Advice</h3>
              <p className="text-sm text-gray-500">Get strategic advice on patent filing strategies and protection of your intellectual property.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
