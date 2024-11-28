import { useState } from 'react';

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(2);

  const faqs = [
    {
      question: "What are the essential supplies a farmer needs to start?",
      answer: "",
      details: [
        "A farmer typically needs high-quality seeds, fertilizers, pesticides, irrigation systems, basic tools (spades, hoes),",
        "and access to soil testing. Depending on the type of farming, additional machinery or livestock care supplies may be required.",
        " ",
        "To test the health of your soil?",
        "You can use a soil testing kit or consult a local agricultural extension service.",
        "Soil tests determine nutrient levels, pH, and recommendations for improving soil fertility."
      ]
    },
    {
      question: "How can I test the health of my soil and improve crop yield sustainably?",
      answer: "You can use a soil testing kit or consult a local agricultural extension service. Soil tests determine nutrient",
      details:[
        "levels, pH, and recommendations for improving soil fertility.",
        "And  Use organic fertilizers, rotate crops, implement integrated pest management (IPM),",
        "and practice conservation tillage. Drip irrigation and modern technology like precision farming also boost efficiency."
      ]
    },
    {
      question: "What type of tractor should I buy?",
      answer: "Choosing the right tractor depends on several factors, such as:-",
      details: [
        "Tractor Categories",
        "Compact Tractors:- HP Range: 15-40 HP.",
        "Best For: Small farms, gardening, mowing, and light-duty work.",
        "Utility Tractors:- HP Range: 40-100 HP. Best For: Medium to large farms with varied tasks like plowing, planting, and hauling.",
        "Row-Crop Tractors:- HP Range: 100+ HP.",
        "Best For: Large-scale farming, especially for row-crop operations (corn, wheat, etc.)"
      ]
    },
    {
      question: "How can I control weeds effectively without harming my crops?",
      answer: "Use mulching, crop rotation, and mechanical weed control methods for sustainable weed management.",
      details: [
        "Preventive Measures",
        "Start with clean fields: Remove any existing weeds before planting crops. Use tilling or mulching to suppress weed growth early.",
        "Inspect seeds and tools: Use certified, weed-free seeds and clean tools to avoid introducing weed seeds.",
        "2. Mechanical Control",
        "Hand Weeding: Ideal for small fields or specific crops. Remove weeds by hand when they are young and easy to uproot.",
        "Tillage and Cultivation: Use plowing, rotary hoes, or weeders to disrupt weeds at their roots. Ensure you don’t disturb the crop’s roots."
      ]
    },
    {
    question: "What types of loans are available for farmers?",
    answer: "We offer a range of loans, including:",
    details: [
      "Crop loans: For seeds, fertilizers, and other farming inputs.",
      "Equipment loans: For purchasing tractors, irrigation systems, and machinery.",
      "Livestock loans: For buying animals or building shelters.",
      "Land development loans: For soil improvement, irrigation, or fencing."
    ]
    },
    {
      question: "What should I do if I face a technical issue?",
      answer: "Contact our technical support team through the help desk.",
      details: [
        "Reach us through:",
        "Phone: +91-7528060418 FARM-LOAN.",
        "Email: CropLink@gmail.com.",
        "Live Chat: Available on our website 24/7."
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">FAQ 🌱</h2>
          <h3 className="text-4xl font-bold mb-8">Frequently Asked Questions</h3>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{faq.question}</span>
                  <span className="text-green-600 text-xl">
                    {openQuestion === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              {openQuestion === index && (
                <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{faq.answer}</p>
                  <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
                    {faq.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;