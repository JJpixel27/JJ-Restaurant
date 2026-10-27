function About() {
    return (
        <>
            <section className="py-12">
                <div className="w-[90%] max-w-[1200px] mx-auto">

                 <h1 className="text-center font-bold text-3xl pt-4 justify-center mb-[1rem]">About Us</h1>

                 <div className="space-y-4 mx-[10%] bg-white items-center justify-center p-4 mb-[2rem] border-l-4 border-blue-300 rounded-2xl">
                        <p className="pt-4">Our restaurant started in January 1953. Our restaurant focuses on serving good food with honest and friendly service. Every meal recieves careful preparetion and fresh ingredients.</p>
             

            
                        <p className="pt-2">Our Restaurant not only serve dishes from the Philippines, but also dishes in some parts of the world. Guests enjoy main dishes, pastries, and refreshing drinks in one place.</p>
            

                        <p className="pt-2">Our chefs brings years of cooking experience. They prepare every dish with attention to flavor and quality. Their work focuses on balance, freshness, and presentation.</p>
                    </div>
                </div>
            </section>

            <section className="pb-12">
                <div className="w-[90%] max-w-[1200px] mx-auto">
                    <img src="./img/interior.jpg" alt="foods" className="block w-full h-auto rounded-md"/>
                </div>
            </section>
        </>
    );
}

export default About;