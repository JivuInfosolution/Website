import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const form = useRef();
    const [showPopup, setShowPopup] = useState(false);

    const sendEmail = (e) => {

        e.preventDefault();
        emailjs.sendForm("service_ijdj13h", "template_wcy2d94", form.current, {
            publicKey: "NBGkvux6fBN4waFbl",
        }).then(() => {
            console.log("SUCCESS!");
            setShowPopup(() => true);
            form.current.reset();
            setTimeout(() => {
                setShowPopup(() => false);
            }, 3000);

        }).catch((error) => {
            console.log("FAILED...", error.text);
        });
    };
    return (
        <div className="flex flex-col md:flex-row items-start justify-center min-h-screen bg-gray-100 p-6 md:p-12 gap-8">
            <div className={`fixed top-25 right-0 transform ${showPopup ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out z-50 backdrop-blur-md`}>
                <div className="bg-white p-6 md:p-8 rounded-l-lg shadow-lg text-center w-80">
                    <h2 className="text-lg font-semibold text-gray-800">✅ Message Sent!</h2>
                    <p className="text-gray-600">Your message has been successfully sent.</p>
                </div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg md:max-w-2xl w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7117.856543866755!2d81.00960339999997!3d26.874019900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1742620306012!5m2!1sen!2sin"
                    className="w-full h-80 md:h-96 border-0 rounded-lg"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg md:max-w-lg w-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    Contact Us
                </h2>
                <form ref={form} className="space-y-4" onSubmit={sendEmail}>
                    <input
                        name="user_name"
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc451]"
                    />
                    <input
                        name="user_email"
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc451]"
                    />
                    <input
                        name="user_contact"
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc451]"
                    />
                    <input
                        name="user_subject"
                        type="text"
                        placeholder="Subject"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc451]"
                    />
                    <textarea
                        name="user_message"
                        placeholder="Your Message"
                        className="w-full p-3 h-24 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#ffc451]"
                    ></textarea>
                    <button
                        type="submit"
                        className="block mx-auto w-1/2 md:w-1/3 bg-[#ffc451] text-white px-6 py-3 rounded-3xl hover:bg-[#c7880c] transition-all duration-300 shadow-md"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
