import { FaArrowRight } from "react-icons/fa6";
import { RetrofitData } from "../../data/RetrofitData";

export default function Products() {
  return (
    <>
      {/*  Mobile View */}
      <div className="py-24 h-auto w-full grid grid-cols-1 gap-4 p-8">
        <div>
          <h1 className="text-3xl -my-1">Select</h1>
          <h1 className="text-3xl font-semibold">Product</h1>
        </div>
        {RetrofitData.map((item, index) => (
          <div key={index} className='relative w-full h-[300px] group hover:bg-leafgreen transition duration-100 hover:cursor-pointer rounded-3xl bg-zinc-800 border-white flex justify-center items-center'>

            {/* Main Image */}
            <img src={item.images[0]} className="p-4 object-contain h-full w-full"></img>

            {/* Styling */}
            <div className="absolute top-2 left-2 bg-neutral-300/20 rounded-3xl h-12 w-24 flex justify-center items-center">
              <p className="text-sm">{item.type}</p>
            </div>
            <div className="absolute top-2 right-2 bg-neutral-300/20 rounded-3xl h-12 w-24 flex justify-center items-center">
              <p className="text-sm">{item.cabin}</p>
            </div>
            <div className="absolute bottom-2 left-2 right-2 bg-neutral-300/20 rounded-full h-16 flex justify-between items-center">
              <div className="pl-5">
                <p className="text-sm text-neutral-200 -mb-1">Retrofit</p>
                <p className="font-semibold">{item.name} Series</p>
              </div>
              <div className="rounded-full h-14 w-14 bg-leafgreen transition duration-100 mr-1 flex items-center justify-center">
                <FaArrowRight className="size-6 fill-black group-hover:fill-white transition duration-100"/>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="max-h-screen h-screen hidden lg:flex flex-col items-center justify-center bg-gradient-to-b from-neutral-700 via-neutral-400 to-neutral-900">
        <div className='w-full h-full max-w-7xl grid grid-cols-4'>
          {/* Cards */}
          <div className='col-span-1 h-full grid grid-cols-1 gap-4 overflow-y-auto hide-scrollbar'>
            {RetrofitData.map((item, index) => (
              <div key={index} className='w-full aspect-w-1 aspect-h-1 rounded-lg bg-gray-600 border-white flex justify-center items-center'>
                Box
              </div>
            ))}
          </div>

          {/* Image */}
          <div className='col-span-3 flex justify-center items-center'>
            <img src={RetrofitData[0].images[0]} className="h-[300px]" alt="Retrofit" />
          </div>
        </div>
      </div>
    </>
  );
}
