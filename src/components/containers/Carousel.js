export default function Carousel() {
    return(
        <div class="relative mt-32">
            <h1 class="text-5xl font-extrabold tracking-tight text-center underline capitalize decoration-emerald-400">Get away this winter</h1>
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
        </div>
    )
}