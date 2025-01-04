import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HeaderSection } from "../shared/header-section";

const pricingFaqData = [
  {
    id: "item-1",
    question: "What is Creatify_AI?",
    answer:
      "Creatify_AI is an AI-powered content generator designed to help you create high-quality articles, social media posts, product descriptions, emails, and more. It’s your ultimate tool for fast and efficient content creation.",
  },
  {
    id: "item-2",
    question: "Can I customize the tone and style of the content?",
    answer:
      "Yes, Creatify_AI allows you to tailor the tone, style, and format of your content to match your brand’s voice. From professional to casual or witty, you’re in control!",
  },
  {
    id: "item-3",
    question: "Is Creatify_AI suitable for non-writers or beginners?",
    answer:
      "Absolutely! Creatify_AI is user-friendly and perfect for beginners. Whether you're a business owner, student, or anyone in need of great content, the app simplifies the process for you.",
  },
  {
    id: "item-4",
    question: "Does Creatify_AI support multiple languages?",
    answer:
      "Yes, Creatify_AI supports multiple languages, enabling you to create content in various languages to connect with your global audience.",
  },
  {
    id: "item-5",
    question: "Is my data safe with Creatify_AI?",
    answer:
      "Yes, we take data privacy and security seriously. All content and user data are protected with industry-standard encryption to ensure your information is secure.",
  },
];

export function PricingFaq() {
  return (
    <section className="container max-w-4xl py-2">
      <HeaderSection
        label="FAQ"
        title="Frequently Asked Questions"
        subtitle="Explore our comprehensive FAQ to find quick answers to common
          inquiries. If you need further assistance, don't hesitate to
          contact us for personalized help."
      />

      <Accordion type="single" collapsible className="my-12 w-full">
        {pricingFaqData.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id}>
            <AccordionTrigger>{faqItem.question}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground sm:text-[15px]">
              {faqItem.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
