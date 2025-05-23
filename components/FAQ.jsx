import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import React from 'react';

export default function FAQ() {
  const { t } = useTranslation();
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const questions = [
    {
      id: 1,
      question: t('faq.smallOrders.question'),
      answer: t('faq.smallOrders.answer')
    },
    {
      id: 2,
      question: t('faq.pricing.question'),
      answer: t('faq.pricing.answer')
    },
    {
      id: 3,
      question: t('faq.ordering.question'),
      answer: t('faq.ordering.answer')
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#111] to-black">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-[#FFD700] mb-8 text-center">{t('faq.title')}</h2>
          <div className="space-y-4">
            {questions.map((q, index) => (
              <div key={q.id} className="border border-gray-800 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-black hover:bg-gray-900 transition-colors duration-200 flex justify-between items-center"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="text-[#FFD700]">{q.question}</span>
                  <span className={`transform transition-transform duration-200 ${openQuestion === index ? 'rotate-180' : ''}`}>
                    <svg
                      className="w-5 h-5 text-[#FFD700]"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 bg-gray-900/50 text-gray-300">
                    {q.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 