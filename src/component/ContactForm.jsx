const ContactForm = () => {
    return <>
        <div className=" p-6 rounded-lg  max-w-3xl mx-auto">
            
            <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded-md" />
                <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded-md" />
                <input type="tel" placeholder="Phone Number" className="w-full p-2 border border-gray-300 rounded-md" />
                <input type="textarea" placeholder="message " className="w-full p-2 h-20 border border-gray-300 rounded-md" />
                <button type="submit" className=" bg-[#ffc451] w-3xl   text-white px-10 py-2 rounded-3xl hover:bg-[#c7880c] transition">
                    Submit
                </button>
            </form>
        </div>
    </>
}

export default ContactForm;
