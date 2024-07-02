import Carousel from "../components/containers/Carousel"

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
                <Carousel/>
                {/* <div class="relative mt-32">
                    <ul class="mt-10 pb-8 px-[50vw] w-full flex gap-8 snap-x overflow-x-auto self-center">
                        <li class="snap-center">
                            <div class="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl">
                                <img src="https://images.unsplash.com/photo-1542144612-1b3641ec3459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" class="absolute inset-0 object-cover object-bottom w-full h-full " />
                                <div class="absolute inset-0 w-full h-full bg-gradient-to-br from-black/75"></div>

                                <div class=" relative h-96 w-[768px] p-12 flex flex-col justify-between items-start">
                                    <div>
                                        <p class="font-medium text-stone-50">Destination</p>
                                        <h2 class="w-2/3 mt-3 text-3xl font-semibold tracking-tight text-white">amit deka</h2>
                                    </div>

                                    <a href="#" class="px-4 py-3 text-sm font-medium bg-white rounded-lg text-slate-900"> browse</a>
                                </div>
                            </div>
                        </li>

                        <li></li>*4 times
                    </ul>
                </div> */}
            </div>
        </div>
    )
}