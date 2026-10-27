function Home() {
    const testimonials = [
        {
            message: "The food is nice.",
            name: "Gordon Ramsey",
        },
        {
            message: "The service is nice.",
            name: "Jeff Bezos",
        },
        {
            message: "10 out of 10 restaurant.",
            name: "Elon Musk",
        },
        {
            message: "Nice service and friendly staff.The buffalo wings taste amazing.",
            name: "Kim Chu",
        },
        {
            message: "Family dinner felt enjoyable here. Everyone loved the ribs.",
            name: "Coco Martin",
        },
    ]
    return (
    <>
        <section className="relative overflow-hidden py-20 md:py-24 text-white text-center">
            <div className="absolute inset-0 bg-cover bg-center bg-fixed scale-105 blur-md" style={{backgroundImage: "url('/img/interior.jpg')"}} />

            <div className="absolute inset-0 bg-black/40"/>

            <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto">
                <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                    Welcome To JJ's Restaurant
                </h1>
                <p className="text-lg">
                    Best foods in the city.
                </p>
            </div>
        </section>

        <section className="py-12">
            <div className="w-[90%] max-w-[1200px] mx-auto">
                <h2 className="mb-8 text-3xl font-bold text-center text-blue-700">Customer Testimonials</h2>

                <div className="space-y-6">
                    {testimonials.map((testimonial) =>(
                        <div key={testimonial.name} className="p-4 bg-white border-l-4 border-blue-300 rounded-2xl shadow-sm">
                            <p className="italic">"{testimonial.message}"</p>
                            <span className="block mt-2 font-bold text-right">- {testimonial.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
    )
}

export default Home;