import { useState } from "react";
import Section from "./component/Section";
import ContactForm from "./component/ContactForm";
import Faqitem from "./component/Faqitem";
import contactImage from '../public/images/contact.jpg';
import help from '../public/images/help.jpg';
import query from '../public/images/query .jpg';
import management from '../public/images/management.jpg';
import visitingus from '../public/images/visitingus.jpg';

const Contact = () => {

    const sections = [
        { title: "How Can We Help?", text: "We're here to help! If you have any questions or need support, we're just a message away. We'd love to hear from you! Whether you have a query or need assistance, feel free to reach out. Looking for something specific? Let us know your requirements, and we'll handle the rest!", image: help },
        { title: "General Inquiries", text: "Have questions or need support? We're here to help. Whether you have a query or need assistance, feel free to reach out. Let us know your requirements, and we’ll take care of the rest! For any assistance, our team is available 24/7. contact us at +91 8004125688, +91 9682201545.", image: query },
        { title: "Support & Assistance", text: "Have questions or need assistance? Our dedicated support team is here to help! Whether it's day or night, feel free to reach out for quick, friendly, and reliable support. We're committed to making your experience seamless and stress-free. Let us handle the details so you can focus on what matters most. Available 24/7. Contact us at +91 9140512362 or +91 6307649633.", image: contactImage },

        { title: "Management Contact", text: "For escalations or personalized assistance, contact our manager directly. We're here to ensure you get the support you need! Available 24/7. Reach us at +91 8004125688 or +91 9258559493. We're always ready to assist you!", image: management },

        { title: "Interested in Visiting Us?", text: "Need assistance? Our dedicated support team is here 24/7 to help! Whether it's day or night, reach out for quick, friendly, and reliable support. For escalations, contact our manager directly. You can also visit our office to explore live demos and discuss your requirements. Office Hours: 9 AM - 6 PM (Closed on Sundays). We look forward to welcoming you!", image: visitingus },

        
    ];

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

    return (
        <div className="max-w-6xl mx-auto p-6">

            <div className="mt-10 text-center p-8">
                {sections.map((section, index) => (
                    <Section
                        key={index}
                        title={section.title}
                        text={section.text}
                        image={section.image}
                        isReversed={index % 2 !== 0}
                    />
                ))}
            </div>


            <div className="mt-10 bg-slate-50 text-center p-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 mx-auto">Need Assistance? Fill Out the Form</h2>
                <ContactForm />
            </div>

            <div className="mt-10">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <Faqitem question={faq.question} answer={faq.answer}></Faqitem>
                ))}

            </div>
        </div>
    );
};

export default Contact;
