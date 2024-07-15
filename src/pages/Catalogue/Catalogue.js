import { RetrofitData } from "../../data/RetrofitData"

export default function Catalogue(){

    return(
        <div className="flex flex-col justify-center items-center text-aurumwhite bg-gradient-to-bl from-naturegreen-400 to-naturegreen-900 ">
            <div className="h-auto w-full max-w-7xl px-8 py-36">
                <div className="">
                    <h1 className="text-4xl lg:text-7xl text-aurumwhite font-semibold">ALL PRODUCTS</h1>
                </div>
                <div className="grid grid-cols-2 gap-4 py-20">
                    {RetrofitData.map((item, index) => (
                        ((index + 1) % 3 ?
                        <div className="w-full h-full">
                            <img src={item.images[0]}/>
                        </div>
                        :
                        <div className="col-span-2 w-full h-full">
                            <img src={item.images[0]}/>
                        </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}