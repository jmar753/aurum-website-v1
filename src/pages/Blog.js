export default function Blog(){
    return(
        <div className="flex justify-center items-center">
            <div className="pb-20 w-full max-w-7xl text-gray-800 px-4 space-y-4">
                {/* Title */}
                <h1 className="pt-[6rem] text-3xl font-semibold">Aurum <span className="text-aurumgreen-600">Blog</span></h1>

                {/* Search Bar */}
                <div className="relative flex">
                    <input
                        type="search"
                        className="relative m-0 block flex-auto rounded border border-solid border-gray-800 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none"
                        placeholder="Search"
                        aria-label="Search"
                        id="exampleFormControlInput2"
                        aria-describedby="button-addon2" />
                    <span
                        className="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface [&>svg]:h-5 [&>svg]:w-5"
                        id="button-addon2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </span>
                </div>

                {/* Latest News */}
                <div>
                    {/* Header */}
                    <div className="flex justify-between items-center pb-10">
                        <h1 className="text-xl font-semibold">Latest Posts</h1>
                        <h1>See More</h1>
                    </div>

                    {/* Carousel */}
                    <div className="grid grid-cols-3 gap-6">
                        {cats.map((item, index) => 
                            <div className=" bg-white shadow-xl rounded-3xl" key={index}>
                                <img 
                                    src={item.img}
                                    className="h-[200px] w-full rounded-t-3xl object-cover"
                                />
                                <div className="p-6 space-y-6">
                                    <h1 className="font-semibold text-2xl">{item.title}</h1>
                                    <p className="line-clamp-5">{item.body}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Header */}
                    <div className="flex justify-between items-center py-10">
                        <h1 className="text-xl font-semibold">Popular Posts</h1>
                        <h1>See More</h1>
                    </div>

                    {/* Carousel */}
                    <div className="space-y-6">
                        {cats.map((item, index) => 
                            <div className="flex gap-x-16 border-b-2 pt-2 pb-6" key={index}>
                                <div className="pr-6 space-y-6 col-span-3">
                                    <h1 className="font-semibold text-2xl">{item.title}</h1>
                                    <p className="line-clamp-5">{item.body}</p>
                                    <div className="grid grid-cols-2">
                                        <p className="">By: {item.author}</p>
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                                <img 
                                    src={item.img}
                                    className="h-[200px] w-[200px] rounded-3xl object-cover"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const cats = [
    {
        id: 1,
        img: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
        title: "This is a placeholder for the cards",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut justo ac risus gravida placerat a sed lacus. Sed vehicula odio lectus, et tincidunt risus lacinia ac. Proin aliquam diam vitae urna sollicitudin, ut tempor lorem iaculis. Aenean sed libero leo. Aliquam sodales, quam non sagittis lobortis, dui augue bibendum enim, sed sagittis lectus nibh ut mi. Nunc et odio turpis. Curabitur auctor pretium enim eu pretium.",
        author: "Author Person",
        date: "July 3rd, 2024",
        genre: "Educational",
    },
    {
        id: 2,
        img: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
        title: "This is a placeholder for the cards",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut justo ac risus gravida placerat a sed lacus. Sed vehicula odio lectus, et tincidunt risus lacinia ac. Proin aliquam diam vitae urna sollicitudin, ut tempor lorem iaculis. Aenean sed libero leo. Aliquam sodales, quam non sagittis lobortis, dui augue bibendum enim, sed sagittis lectus nibh ut mi. Nunc et odio turpis. Curabitur auctor pretium enim eu pretium.",
        author: "Author Person",
        date: "July 3rd, 2024",
        genre: "Educational",
    },
    {
        id: 3,
        img: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
        title: "This is a placeholder for the cards",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut justo ac risus gravida placerat a sed lacus. Sed vehicula odio lectus, et tincidunt risus lacinia ac. Proin aliquam diam vitae urna sollicitudin, ut tempor lorem iaculis. Aenean sed libero leo. Aliquam sodales, quam non sagittis lobortis, dui augue bibendum enim, sed sagittis lectus nibh ut mi. Nunc et odio turpis. Curabitur auctor pretium enim eu pretium.",
        author: "Author Person",
        date: "July 3rd, 2024",
        genre: "Educational",
    },
]