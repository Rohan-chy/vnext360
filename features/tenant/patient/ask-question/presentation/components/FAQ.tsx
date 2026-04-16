'use client';

import { useState } from 'react';
import { faqData, FaqCategory } from '../../application/utils/faq';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const categories: { label: string; value: FaqCategory }[] = [
  { label: 'General', value: 'general' },
  { label: 'Appointments', value: 'appointments' },
  { label: 'Medications', value: 'medications' },
  { label: 'Billing', value: 'billing' },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('general');

  return (
    <section className="w-full max-w-4xl mx-auto px-0 sm:px-4">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10">
        Frequently Asked Questions
      </h2>

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => {
          const isActive = activeCategory === category.value;

          return (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                                         ${
                                           isActive
                                             ? 'bg-[#0D6641] text-white shadow-md'
                                             : 'bg-muted text-muted-foreground hover:bg-muted/70'
                                         }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {/* FAQ Accordion */}
      <Accordion type="single" collapsible className="space-y-3">
        {faqData[activeCategory].map((faq, index) => (
          <AccordionItem
            key={index}
            value={`${activeCategory}-${index}`}
            className="rounded-xl border shadow-sm transition-all
                data-[state=open]:shadow-md"
          >
            <AccordionTrigger className="group px-4 sm:px-6 py-3 text-left text-sm sm:text-base font-semibold hover:no-underline">
              <div className="flex w-full items-center justify-between">
                <span>{faq.question}</span>
              </div>
            </AccordionTrigger>

            <AccordionContent className="px-6  text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
