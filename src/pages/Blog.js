export default function Blog(){
    return(
        <div className="bg-aurumgrey h-screen w-full text-neutral-100 px-6 space-y-4">
            {/* Title */}
            <h1 className="pt-[6rem] text-3xl">Aurum <span className="text-aurumgreen-600">Blog</span></h1>

            {/* Search Bar */}
            <div class="relative flex">
                <input
                    type="search"
                    class="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    id="exampleFormControlInput2"
                    aria-describedby="button-addon2" />
                <span
                    class="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
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
                <div className="flex justify-between items-center">
                    <h1>Latest News</h1>
                    <h1>See more</h1>
                </div>

                {/* Carousel */}
                <div>

                </div>
            </div>
        </div>
    )
}