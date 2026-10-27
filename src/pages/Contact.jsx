import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handelSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted: ", formData);

        alert("Thank you for contacting JJ's Restaurant!");

        setFormData({
            name: "",
            email: "",
            message: "",
        });
    }

    return (
    <>
        <section className="py-12">
            <div className="w-[90%] max-w-[1200px] mx-auto">
                <h1 className="mb-8 text-3xl font-bold text-center text-blue-900">
                    Contact Us
                </h1>

                <div className="bg-white border border-2 border-blue-900 p-5 rounded-md">
                    <div className="text-left mb-8 space-y-2 ">
                        <div className="max-w-[600px] mx-auto">
                            <p>
                                <strong>Address: </strong> Brgy Tiguma, Pagadian City, Philippines
                            </p>

                            <p>
                                <strong>Phone: </strong> 1234-567-8910
                            </p>

                            <p>
                                <strong>Email: </strong> jjrestaurant@gmail.com
                            </p>
                        </div>

                        <form onSubmit={handelSubmit} className="max-w-[600px] mx-auto">

                            <div className="mb-4">
                                <label htmlFor="name" className="block font-bold mb-2">
                                    Name:
                                </label>
                                <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} className="w-full px-3 py-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"></input>
                            </div>
                    

                            <div className="mb-4">
                                <label htmlFor="email" className="block font-bold mb-2">
                                    Email:
                                </label>

                                <input type="email" id="email" name="email" placeholder="Enter your Email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"></input>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block font-bold mb-2">
                                    Message:
                                </label>

                                <textarea type="message" id="message" name="message" placeholder="Enter your message" value={formData.message} onChange={handleChange} required className="w-full px-3 py-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900" />
                            </div>

                            <button type="submit" className="bg-blue-700 p-2 text-white border border-gray-300 rounded-md hover:bg-blue-900 transition-color duration-300">Send Message</button>
                        </form>
                    </div>
                </div>                
            </div>
        </section>
        
    </>
        
        
    );
}

export default Contact;

