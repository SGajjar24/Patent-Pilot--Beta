import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";

export default function HelpPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Help & FAQ</h1>
          <p className="text-gray-500 md:text-xl">
            Find answers to common questions about PatentPilot
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Icons.fileText className="h-5 w-5 text-blue-500" />
              <CardTitle>AI Patent Draft</CardTitle>
            </div>
            <CardDescription>
              Learn how to use our AI patent drafting tool
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does the AI patent draft generator work?</AccordionTrigger>
                <AccordionContent>
                  Our AI patent draft generator uses advanced natural language processing to analyze your invention description and generate a comprehensive patent application draft, including abstract, description, and claims sections tailored to your invention.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What information should I include in my invention description?</AccordionTrigger>
                <AccordionContent>
                  For best results, include a detailed description of your invention, how it works, the problem it solves, its unique features, and any technical specifications. The more detailed your description, the better the generated draft will be.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I edit the generated patent draft?</AccordionTrigger>
                <AccordionContent>
                  Yes, the generated draft is a starting point. You can download it as a PDF and make any necessary edits or refinements before filing. We recommend having a patent attorney review the final draft.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Icons.search className="h-5 w-5 text-green-500" />
              <CardTitle>Prior Art Search</CardTitle>
            </div>
            <CardDescription>
              Learn how to use our prior art search tool
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is prior art?</AccordionTrigger>
                <AccordionContent>
                  Prior art refers to any evidence that your invention is already known. It includes existing patents, published patent applications, scientific literature, products on the market, and public disclosures that predate your invention.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How comprehensive is the prior art search?</AccordionTrigger>
                <AccordionContent>
                  Our AI searches through millions of patent documents across multiple patent offices worldwide. However, no search can guarantee 100% coverage of all prior art. We recommend using our tool as a starting point and consulting with a patent attorney for critical inventions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How should I interpret the search results?</AccordionTrigger>
                <AccordionContent>
                  The search results include a novelty assessment, potential patentability challenges, and relevant patents. Review these carefully to understand how your invention compares to existing patents and what aspects might be novel or potentially infringing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Icons.checkCircle className="h-5 w-5 text-purple-500" />
              <CardTitle>Approval Prediction</CardTitle>
            </div>
            <CardDescription>
              Learn how to use our approval prediction tool
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How accurate is the approval prediction?</AccordionTrigger>
                <AccordionContent>
                  Our prediction model is trained on historical patent application data and outcomes. While it provides a reasonable estimate, many factors influence actual patent approval, including the specific patent examiner assigned and evolving legal standards.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What factors are considered in the prediction?</AccordionTrigger>
                <AccordionContent>
                  The prediction analyzes claim language, specification completeness, technical detail level, clarity, potential prior art conflicts, and compliance with patent office requirements. It compares these factors to successfully approved patents in similar technical fields.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How can I improve my approval likelihood?</AccordionTrigger>
                <AccordionContent>
                  Follow the specific suggestions provided in the prediction results. Generally, improvements include strengthening claims, adding technical details, clarifying the invention's novelty, addressing potential objections, and ensuring comprehensive description of all aspects of the invention.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Icons.phone className="h-5 w-5 text-orange-500" />
              <CardTitle>Expert Consultation</CardTitle>
            </div>
            <CardDescription>
              Learn about our expert consultation service
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Who are the patent experts?</AccordionTrigger>
                <AccordionContent>
                  Our network includes registered patent attorneys and agents with expertise across various technical fields. All have extensive experience in patent prosecution and are familiar with USPTO, EPO, and other major patent office procedures.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How quickly will I be contacted after requesting a consultation?</AccordionTrigger>
                <AccordionContent>
                  You will typically be contacted within 1-2 business days after submitting your consultation request. Urgent consultations may be accommodated sooner when available.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What are the consultation fees?</AccordionTrigger>
                <AccordionContent>
                  Initial consultations (30 minutes) are offered at a reduced rate. Ongoing consultation fees vary based on the complexity of your invention and the specific services needed. The expert will discuss fee structures during your initial consultation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is PatentPilot a substitute for a patent attorney?</AccordionTrigger>
              <AccordionContent>
                PatentPilot is designed to assist inventors and legal professionals, not replace them. While our AI tools can help streamline the patent process and provide valuable insights, we recommend consulting with a qualified patent attorney, especially for complex inventions or critical intellectual property.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How is my data protected?</AccordionTrigger>
              <AccordionContent>
                We take data security seriously. All invention descriptions and generated drafts are encrypted in transit and at rest. We do not share your invention details with third parties without your explicit consent. For maximum security, you can download your drafts and delete them from our servers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can PatentPilot handle international patent applications?</AccordionTrigger>
              <AccordionContent>
                Yes, PatentPilot is designed to assist with patent applications for major patent offices worldwide, including USPTO (United States), EPO (Europe), JPO (Japan), KIPO (Korea), and CNIPA (China). The generated drafts follow international patent drafting standards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How can I provide feedback or report issues?</AccordionTrigger>
              <AccordionContent>
                We welcome your feedback to improve PatentPilot. You can send feedback or report issues by clicking the "Feedback" link in the footer or by emailing support@patentpilot.com. Our team typically responds within 24-48 hours.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
