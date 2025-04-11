import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#3AB5E9] py-16 text-white md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Frequently Asked Questions
              </h1>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                Find answers to common questions about BeyondMeasure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0E5D7F]">General Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "What is BeyondMeasure?",
                    answer:
                      "BeyondMeasure is an educational assessment platform designed to help teachers create, implement, and analyze authentic assessments that capture meaningful student learning and growth. Our tools go beyond traditional testing to measure what truly matters in education.",
                  },
                  {
                    question: "Who can use BeyondMeasure?",
                    answer:
                      "BeyondMeasure is designed for K-12 educators, including classroom teachers, instructional coaches, curriculum specialists, and school administrators. Our platform is adaptable for all grade levels and subject areas.",
                  },
                  {
                    question: "Is BeyondMeasure aligned with educational standards?",
                    answer:
                      "Yes, BeyondMeasure allows teachers to align assessments with state and national standards while also measuring deeper learning outcomes that may not be captured in standardized tests.",
                  },
                  {
                    question: "How much does BeyondMeasure cost?",
                    answer:
                      "We offer several pricing tiers, including options for individual teachers, schools, and districts. Please contact our sales team for detailed pricing information based on your specific needs.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-[#0E5D7F]">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0E5D7F]">Getting Started</h2>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How do I create an account?",
                    answer:
                      "You can sign up for BeyondMeasure by clicking the 'Sign Up' button on our homepage. You'll need to provide your name, email address, and create a password. School and district administrators can also contact us directly to set up accounts for their staff.",
                  },
                  {
                    question: "Is there training available for new users?",
                    answer:
                      "Yes! We offer comprehensive onboarding resources including video tutorials, live webinars, and a knowledge base. New users also receive a guided tour of the platform when they first log in.",
                  },
                  {
                    question: "Can I try BeyondMeasure before purchasing?",
                    answer:
                      "Absolutely. We offer a 30-day free trial that gives you full access to all features. No credit card is required to start your trial.",
                  },
                  {
                    question: "How long does it take to get started?",
                    answer:
                      "Most teachers can set up their account and create their first assessment in less than an hour. Full implementation across a school or district typically takes 2-4 weeks, including training and integration with existing systems.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index + 5}`}>
                    <AccordionTrigger className="text-left text-[#0E5D7F]">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0E5D7F]">Features & Functionality</h2>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "What types of assessments can I create?",
                    answer:
                      "BeyondMeasure supports a wide range of assessment types, including performance tasks, projects, portfolios, observations, and more traditional formats like quizzes and tests. Our platform is designed to be flexible to meet diverse assessment needs.",
                  },
                  {
                    question: "Can I collaborate with other teachers?",
                    answer:
                      "Yes, collaboration is a key feature of BeyondMeasure. You can co-create assessments with colleagues, share resources, and analyze data together to inform instructional decisions.",
                  },
                  {
                    question: "How does BeyondMeasure handle student data privacy?",
                    answer:
                      "We take data privacy very seriously. BeyondMeasure is FERPA compliant and employs industry-standard security measures to protect all user data. We never sell or share student information with third parties.",
                  },
                  {
                    question: "Can BeyondMeasure integrate with other educational tools?",
                    answer:
                      "Yes, we offer integrations with popular learning management systems, student information systems, and other educational technology tools. Our API also allows for custom integrations based on your school or district's needs.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index + 9}`}>
                    <AccordionTrigger className="text-left text-[#0E5D7F]">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="rounded-lg bg-[#F7DBA7]/20 p-6">
              <h3 className="text-lg font-semibold text-[#0E5D7F]">Still have questions?</h3>
              <p className="mt-2 text-muted-foreground">
                If you couldn't find the answer you were looking for, please reach out to our support team.
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#3AB5E9] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#3AB5E9]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Contact Support
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Browse Knowledge Base
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
