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
    <div className="max-w-3xl mx-auto divide-y divide-gray-200">
      {faqs.map((faq, index) => (
        <div key={index} className="py-4">
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center w-full text-left"
          >
            <span className="font-medium text-gray-900">{faq.question}</span>
            <span
              className={`ml-4 transform transition-transform duration-300 text-xl ${
                openIndex === index ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <p className="mt-2 text-gray-700">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
