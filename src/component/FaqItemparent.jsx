
import { useState } from "react";
import FaqItem from './Faqitem'

const faqs = [
    { question: "How can I get in touch with customer support?", answer: "You can reach our customer support team via phone, email, or by filling out the contact form on this page. We aim to respond within 24 hours." },

    { question: "What is the best time to contact you?", answer: "Our support team is available from 9:00 AM to 6:00 PM (IST), Monday to Friday. Feel free to reach out during these hours for prompt assistance." },

    { question: "How soon will I receive a response after submitting the contact form?", answer: "We typically respond within 1-2 business days. If it’s urgent, please call us directly at the number provided." },

    { question: "Can I schedule a call or meeting with your team?", answer: "Yes, you can request a call or meeting in the contact form. Mention your preferred time, and we’ll do our best to accommodate." },

    { question: "Where is your office located?", answer: "Our office address is Business unit no.9, 1st floor Gomti Nagar Aryawart Complex, near Diamond Palace Prem Nagar ,Lucknow, Uttar Pradesh 226001. You’re welcome to visit during business hours, but we recommend scheduling an appointment beforehand." },

    { question: "Do you offer support in languages other than English?", answer: "Yes, we also provide support in Hindi Please specify your preferred language in the contact form." },

    { question: "What should I include in my message to get faster assistance?", answer: "For faster assistance, please include details such as your issue, any error messages, and your contact information. This helps us assist you more efficiently." },

    { question: "Can I contact you for feedback or suggestions?", answer: "Absolutely! We welcome feedback and suggestions. You can use the contact form to share your thoughts with us, and we’d be happy to hear from you." },

];
const FaqList = () => {
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-sm mt-10 mb-10">
            {faqs.map((faq, index) => (
                <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>
    );
};

export default FaqList;


