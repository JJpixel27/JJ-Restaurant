const menuSections = [
    {
        title: "Appetizers",
        items: [
            {
                name: "Fries",
                price: 130,
                image: "/img/fries.jpg",
                description: "Golden-brown fries tossed in savory garlic and fine herbs, served hot with a side of tangy katchup.",
            },
            {
                name: "Loaded Nachos",
                price: 340,
                image: "/img/nachos.jpg",
                description: "Crispy tortilla chips topped with seasoned beef, melted cheese, jalapeno, tomatoes, and sour cream.",
            },
            {
                name: "Garlic Shrimp",
                price: 500,
                image: "/img/shrimp.jpg",
                description: "Juicy shrimp sauteed in a rich garlic butter sauce, served with warm bread.",
            },
            {
                name: "Buffalo Wings",
                price: 450,
                image: "/img/wings.jpg",
                description: "Crispy wings tossed in your choice of mild, spicy, or BBQ souce, served with ranch.",
            },
        ],
    },

    {
        title: "Desserts",
        items: [
            {
                name: "Chocolate Lava Cake",
                price: 310,
                image: "/img/choco.jpg",
                description: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
            },
            {
                name: "Cheesecake",
                price: 310,
                image: "/img/cheese.jpg",
                description: "Rich and creamy chessecake with a buttery graham crust, topped with mixed berries.",
            },
            {
                name: "Apple Pie",
                price: 250,
                image: "/img/pie.jpg",
                description: "Warm spiced apple pie served with a scoop of vanilla ice cream and caramel drizzle.",
            },
            {
                name: "Creme Brulee",
                price: 495,
                image: "/img/creme.jpg",
                description: "Silky vanilla custard with a crisp caramelized sugar top.",
            },
        ],
    },

    {
        title: "Drinks",
        items: [
            {
                name: "Iced Caramel Latte",
                price: 150,
                image: "/img/iced.jpg",
                description: "Chilled espresso with milk and rich caramel flavor.",
            },
            {
                name: "Strawberry Lemonade",
                price: 100,
                image: "/img/strwberry.jpg",
                description: "Refresshing blend of fresh strawberries, lemon, and a hint of sweetness.",
            },
            {
                name: "Mango Smoothie",
                price: 120,
                image: "/img/mango.jpg",
                description: "Creamy, tropical, and naturally sweet mango blend.",
            },
            {
                name: "Classic Mojito",
                price: 250,
                image: "/img/mojito.jpg",
                description: "Cool and crisp with fresh mint, lime, and a splash of soda.",
            },
        ],
    },

];

function Menu() {
    return (
    <>
        <section className="py-12">
            <div className="w-[90%] max-w-[1200px] mx-auto">
                <h1 className="mb-8 text-3xl font-bold text-blue-900 text-center">
                    Our Menu
                </h1>
                {menuSections.map((section) => (
                    <div key={section.title} className="mb-10">
                        <h2 className="pb-2 mb-5 text-2xl font-bold text-blue-900 border-b-2 border-blue-900">
                            {section.title}
                        </h2>

                        <ul className="space-y-4 list-none">
                            {section.items.map((item) => (
                                <li key={item.name} className="flex flex-col p-4 rounded-lg shadow  md:flex-row bg-white items-center border-l-4 border-blue-300">
                                    <img src={item.image} alt={item.name} className="w-full md:w-[100px] h-[200px] md:h-[100px] object-cover rounded-md mb:4 md:mb-0 md:mr-4 flex-shrink-0" />

                                    <div className="flex-1 w-full">
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="font-bold">{item.name}</span>
                                            <span className="font-semibold text-blue-900 whitespace-nowrap">PHP {item.price}</span>
                                        </div>

                                        <p className="mt-2 text-gray-700">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </ section>
    </>
    );
}

export default Menu;


{/* <section className="relative overflow-hidden py-20 md:py-24 text-blue-900 text-center">
            <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto">
                <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                    Our Menu
                </h1> */}