import { useState } from "react";

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-300 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800 transition-all duration-300"
            >
                <span>{question}</span>
                <span className={`text-xl transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                    {isOpen ? "−" : "+"}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
            >
                <p className="text-gray-600 text-base leading-relaxed">{answer}</p> 
            </div>
        </div>
    );
};

export default FaqItem;
