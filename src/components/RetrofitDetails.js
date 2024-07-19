import { useParams } from "react-router-dom";
import { RetrofitData } from "../data/RetrofitData";
import { useEffect, useState } from "react";
import NoPage from "../pages/NoPage";
import { FaArrowRight } from "react-icons/fa6";

export const RetrofitDetails = () => {
  const [retrofit, setRetrofit] = useState(null);
  const { retrofitId } = useParams();

  useEffect(() => {
    setRetrofit(RetrofitData.find((item) => retrofitId === item.id));
  }, [retrofitId]);

  if (!retrofit) {
    return <NoPage />;
  }

  return (
    <>
      {/*  Mobile View */}
      <div className="py-24 h-auto w-full grid grid-cols-1 gap-4 p-8">

        <div>
          <h1 className="text-3xl -my-1">
            {retrofit.name} <span className="text-3xl font-semibold">Series</span>
          </h1>
        </div>

        <div className="relative w-full h-[300px]  flex justify-center items-center">
          {/* Main Image */}
          <img src={retrofit.images[0]} className="p-4 object-contain h-full w-full" alt={`${retrofit.name} Series`} />
        </div>
        {/* Image Carousel */}
        <div className="w-full h-auto grid grid-cols-6 gap-2">
          <div className="w-full aspect-w-1 aspect-h-1 bg-leafgreen"></div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-leafgreen"></div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-leafgreen"></div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-leafgreen"></div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-leafgreen"></div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-leafgreen"></div>
        </div>

        {/* Information Section */}
        <div className='relative w-full h-auto p-2 my-5 rounded-3xl bg-zinc-800 border-white flex justify-center items-center'>
          <p>{retrofit.description}</p>
        </div>

        <div className='relative w-full h-auto p-2 my-5 rounded-3xl bg-zinc-800 border-white flex justify-center items-center'>
          <p>{retrofit.description}</p>
        </div>

      </div>

      {/* Desktop View */}
      <div className="max-h-screen h-screen hidden lg:flex flex-col items-center justify-center bg-gradient-to-b from-neutral-700 via-neutral-400 to-neutral-900">
        {/* Add desktop-specific content here */}
      </div>
    </>
  );
};
