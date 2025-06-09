import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: 'What is FlutterPup?',
      answer: 'FlutterPup helps you kickstart Flutter projects with AI-generated templates and developer assistance.'
    },
    {
      question: 'How does the AI choose templates?',
      answer: 'Our AI analyzes your project requirements to recommend templates that best fit your needs.'
    },
    {
      question: 'Can I customize the generated code?',
      answer: 'Yes, all templates are fully customizable and can be extended to match your exact specifications.'
    },
    {
      question: 'Do you offer developer support?',
      answer: 'Professional and Enterprise plans include support from experienced Flutter developers.'
    },
    {
      question: 'What plans are available?',
      answer: 'We offer Basic, Professional, and Enterprise plans so you can choose what works best for your project.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-white scroll-mt-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-5 transition hover:shadow-lg"
          >
            <div
              onClick={() => toggle(index)}
              className="flex justify-between cursor-pointer font-semibold text-lg"
            >
              <span>{faq.question}</span>
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </div>
            <div
              className={`mt-3 transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index
                  ? 'opacity-100 max-h-screen'
                  : 'opacity-0 max-h-0'
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
