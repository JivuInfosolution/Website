import Section from "../component/Section";
import contactImage from '../../public/images/contact.jpg';
import help from '../../public/images/help.jpg';
import query from '../../public/images/query .jpg';
import management from '../../public/images/management.jpg';
import visitingus from '../../public/images/visitingus.jpg';
import Faqitemparent from '../component/FaqItemparent';
const Contact = () => {

    const sections = [
        { title: "How Can We Help?", text: "We're here to help! If you have any questions or need support, we're just a message away. We'd love to hear from you! Whether you have a query or need assistance, feel free to reach out. Looking for something specific? Let us know your requirements, and we'll handle the rest!", image: help },
        { title: "General Inquiries", text: "Have questions or need support? We're here to help. Whether you have a query or need assistance, feel free to reach out. Let us know your requirements, and we’ll take care of the rest! For any assistance, our team is available 24/7. contact us at +91 8004125688, +91 9682201545.", image: query },
        { title: "Support & Assistance", text: "Have questions or need assistance? Our dedicated support team is here to help! Whether it's day or night, feel free to reach out for quick, friendly, and reliable support. We're committed to making your experience seamless and stress-free. Let us handle the details so you can focus on what matters most. Available 24/7. Contact us at +91 9140512362 or +91 6307649633.", image: contactImage },
        { title: "Management Contact", text: "For escalations or personalized assistance, contact our manager directly. We're here to ensure you get the support you need! Available 24/7. Reach us at +91 8004125688 or +91 9258559493. We're always ready to assist you!", image: management },
        { title: "Interested in Visiting Us?", text: "Need assistance? Our dedicated support team is here 24/7 to help! Whether it's day or night, reach out for quick, friendly, and reliable support. For escalations, contact our manager directly. You can also visit our office to explore live demos and discuss your requirements. Office Hours: 9 AM - 6 PM (Closed on Sundays). We look forward to welcoming you!", image: visitingus },


    ];
    return <>
        {/* Ashutosh */}
        <div className="max-w-6xl mx-auto mt-0">

            <div className="mt-8 text-center p-8">
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
        </div>
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center ">
                Frequently Asked Questions
            </h2>
            <Faqitemparent></Faqitemparent>
        </div>
    </>;
};

export default Contact;
