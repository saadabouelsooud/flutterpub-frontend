import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: 'What is FlutterPup?',
      answer: 'FlutterPup is an AI-powered platform that helps businesses and developers create Flutter applications faster by providing customizable templates and connecting clients with expert Flutter developers.'
    },
    {
      question: 'How does the AI template selection work?',
      answer: 'Our AI analyzes your project requirements, industry, target audience, and feature needs to suggest the most suitable Flutter templates from our library. This saves you time in researching and selecting the right starting point for your app.'
    },
    {
      question: 'Do I need coding experience to use FlutterPup?',
      answer: "No, you don't need coding experience to use our platform. Our templates and customization tools are designed to be user-friendly. However, if you need advanced features or customizations, you can connect with our expert Flutter developers."
    },
    {
      question: 'Can I export the Flutter code?',
      answer: 'Yes, all plans include the ability to export clean, well-structured Flutter code that you can use in your own development environment or hand off to your development team.'
    },
    {
      question: 'How do I get started?',
      answer: "Simply click the 'Get Started' button, create an account, and follow our guided wizard to describe your project. Our AI will suggest templates, and you can start customizing right away or connect with a developer for assistance."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="snap-start min-h-screen flex flex-col justify-center px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 space-y-2 transition hover:shadow-lg"
          >
            <div
              onClick={() => toggle(index)}
              className="flex justify-between cursor-pointer font-semibold text-lg"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 stroke-[2]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 stroke-[2]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              )}
            </div>
            <div
              className={`transition-all duration-300 ease-in overflow-hidden ${
                openIndex === index ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
