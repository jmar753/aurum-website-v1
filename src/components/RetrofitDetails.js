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