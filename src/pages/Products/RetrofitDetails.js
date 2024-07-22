import { useParams } from "react-router-dom";
import { RetrofitData } from "../../data/RetrofitData";
import { useEffect, useState } from "react";
import NoPage from "../NoPage";
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

        {/* Data Table */}
        <div className="grid grid-cols-12">
          {/* Table Header */}
          <div className="row-span-3 col-start-1 row-start-2 border border-white text-center">Model</div>
          <div className="col-span-12 col-start-1 row-start-1 border border-white text-center">{retrofit.name} Series Replacement Capacity</div>
          <div className="row-span-3 row-start-2 border border-white text-center"># of Rows X Circuits</div>
          <div className="row-span-2 row-start-2 border border-white text-center">E.S.P</div>
          <div className="col-start-3 row-start-4 border border-white text-center">(IN WC)</div>
          <div className="col-span-3 col-start-4 row-start-2 border border-white text-center">COOLING</div>
          <div className="col-span-3 col-start-7 row-start-2 border border-white text-center">HEATING</div>
          <div className="col-start-4 row-start-3 border border-white text-center">Pressure Drop</div>
          <div className="col-start-5 row-start-3 border border-white text-center">Water Flow</div>
          <div className="col-start-6 row-start-3 border border-white text-center">Total Cooling Capacity</div>
          <div className="col-start-4 row-start-4 border border-white text-center">(Ft)</div>
          <div className="col-start-5 row-start-4 border border-white text-center">(GPM)</div>
          <div className="col-start-6 row-start-4 border border-white text-center">(BTUH)</div>
          <div className="col-span-3 col-start-10 row-start-2 border border-white text-center">ELECTRICAL</div>
          <div className="col-start-7 row-start-3 border border-white text-center">Pressure Drop</div>
          <div className="col-start-7 row-start-4 border border-white text-center">(Ft)</div>
          <div className="col-start-8 row-start-4 border border-white text-center">(GPM)</div>
          <div className="col-start-8 row-start-3 border border-white text-center">Water Flow</div>
          <div className="col-start-9 row-start-3 border border-white text-center">Total Heating Capacity</div>
          <div className="col-start-9 row-start-4 border border-white text-center">(BTUH)</div>
          <div className="col-start-10 row-start-3 border border-white text-center">UNIT FLA</div>
          <div className="col-start-10 row-start-4 border border-white text-center">(A)</div>
          <div className="col-start-11 row-start-3 border border-white text-center">UNIT MCA</div>
          <div className="col-start-11 row-start-4 border border-white text-center">(A)</div>
          <div className="col-start-12 row-start-3 border border-white text-center">UNIT MOP</div>
          <div className="col-start-12 row-start-4 border border-white text-center">(A)</div>

          {/* Measurments */}
          {retrofit.capacityChart.map((item, index) => (
            <div className="col-span-12 grid grid-cols-12 text-center">
              <div className="col-span-1 border border-white">{item.title}</div>
              {item.measurements.map((item, index) => (
                <div className="col-span-1 border border-white">{item}</div>
              ))}
            </div>
          ))}

          {/* Heating / Cooling */}
          <div className="col-span-12 grid grid-cols-12 border border-white text-center">
            <div className="col-span-3 row-span-2 border border-white flex justify-center items-center">MODE</div>
            <div className="col-span-3 col-start-4 border border-white">EWT/LWT</div>
            <div className="col-span-3 col-start-7 border border-white">EAT (DB)</div>
            <div className="col-span-3 col-start-10 border border-white">EAT (WB)</div>
            <div className="col-span-3 col-start-4 row-start-2 border border-white">DEGREE (°F)</div>
            <div className="col-span-3 col-start-7 row-start-2 border border-white">DEGREE (°F)</div>
            <div className="col-span-3 col-start-10 row-start-2 border border-white">DEGREE (°F)</div>
          </div>
    
          {/* Measurement */}
          {retrofit.coolingHeating.map((item, index) => (
            <div className="col-span-12 grid grid-cols-12 text-center">
              <div className="col-span-3 border border-white">{item.title}</div>
              {item.measurements.map((item, index) => (
                <div className="col-span-3 border border-white">{item}</div>
              ))}
            </div>
          ))}
        </div>

        {/* Size Table */}
        {retrofit.tabletype === 1 ?
          <div className="grid grid-cols-11 border text-center">
            <div className="border border-white">Logo</div>
            <div className="border border-white">A</div>
            <div className="border border-white">B</div>
            <div className="border border-white">C</div>
            <div className="border border-white">AA</div>
            <div className="border border-white">AB</div>
            <div className="border border-white">AC</div>
            <div className="border border-white">AD</div>
            <div className="border border-white">AE</div>
            <div className="border border-white">AF</div>
            <div className="border border-white">AG</div>
            {retrofit.measurementChart.map((item, index) => (
              <div className="grid grid-cols-11 col-span-11">
                <div className="border border-white">{item.title}</div>
                {item.measurements.map((item, index) => (
                  <div className="border border-white">{item}</div>
                ))}
              </div>
            ))}
          </div>
          :
          <div className="grid grid-cols-13 text-center">
            <div className="border border-white">Logo</div>
            <div className="border border-white">A</div>
            <div className="border border-white">B</div>
            <div className="border border-white">C</div>
            <div className="border border-white">D</div>
            <div className="border border-white">E</div>
            <div className="border border-white">AA</div>
            <div className="border border-white">AB</div>
            <div className="border border-white">AC</div>
            <div className="border border-white">AD</div>
            <div className="border border-white">AE</div>
            <div className="border border-white">AF</div>
            <div className="border border-white">AG</div>
            {retrofit.measurementChart.map((item, index) => (
              <div className="grid grid-cols-13 col-span-13">
                <div className="border border-white">{item.title}</div>
                {item.measurements.map((item, index) => (
                  <div className="border border-white">{item}</div>
                ))}
              </div>
            ))}
          </div>
        }
      </div>
    </>
  );
};
