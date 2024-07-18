import { useParams } from "react-router-dom"
import { RetrofitData } from "../data/RetrofitData"
import { useEffect, useState } from "react";
import NoPage from "../pages/NoPage";
import { FaArrowRight } from "react-icons/fa6";

export const RetrofitDetails = () => {
    const [retrofit, setRetrofit] = useState({id:'naw'})
    const { retrofitId } = useParams();

    {/* Render Fit Data */}
    useEffect(() => {
        setRetrofit(RetrofitData.find((item) => retrofitId === item.id))
    }, [retrofitId]);

    {/* Return Corresponding page */}
    if (retrofit) {    
      return (
        <>
          {/*  Mobile View */}
          <div className="py-24 h-auto w-full grid grid-cols-1 gap-4 p-8">
            <div>
              <h1 className="text-3xl -my-1">{retrofit.name} <span className="text-3xl font-semibold">Series</span></h1>
            </div>

            <div className='relative w-full h-[300px] group hover:bg-leafgreen transition duration-100 hover:cursor-pointer rounded-3xl bg-zinc-800 border-white flex justify-center items-center'>

              {/* Main Image */}
              <img src={retrofit.images[0]} className="p-4 object-contain h-full w-full"></img>

              {/* Styling */}
              <div className="absolute top-2 left-2 bg-neutral-300/20 rounded-3xl h-12 w-24 flex justify-center items-center">
                <p className="text-sm">{retrofit.type}</p>
              </div>
              <div className="absolute top-2 right-2 bg-neutral-300/20 rounded-3xl h-12 w-24 flex justify-center items-center">
                <p className="text-sm">{retrofit.cabin}</p>
              </div>
              <div className="absolute bottom-2 left-2 right-2 bg-neutral-300/20 rounded-full h-16 flex justify-between items-center">
                <div className="pl-5">
                  <p className="text-sm text-neutral-200 -mb-1">Retrofit</p>
                  <p className="font-semibold">{retrofit.name} Series</p>
                </div>
                <div className="rounded-full h-14 w-14 bg-leafgreen transition duration-100 mr-1 flex items-center justify-center">
                  <FaArrowRight className="size-6 fill-black group-hover:fill-white transition duration-100"/>
                </div>
              </div>
            </div>

          </div>
    
          {/* Desktop View */}
          <div className="max-h-screen h-screen hidden lg:flex flex-col items-center justify-center bg-gradient-to-b from-neutral-700 via-neutral-400 to-neutral-900">

          </div>
        </>
      )
    } 
    else{
        return <NoPage/>
    } 
      
}