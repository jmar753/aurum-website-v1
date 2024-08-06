import { useParams } from "react-router-dom";
import { RetrofitData } from "../../data/RetrofitData";
import { useEffect, useState } from "react";
import NoPage from "../NoPage";
import ApexCharts from 'react-apexcharts';

export default function RetrofitDetails() {
    const [retrofit, setRetrofit] = useState(null);
    const { retrofitId } = useParams();

    useEffect(() => {
        setRetrofit(RetrofitData.find((item) => retrofitId === item.id));
    }, [retrofitId]);

    if (!retrofit) {
        return <NoPage />;
    }

    const series = retrofit.lines

    const options = {
        chart: {
            type: 'line',
            height: 400,
            zoom: {
                enabled: false
            }
        },
        xaxis: retrofit.xaxis,
        yaxis: retrofit.yaxis,
        colors: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'],
        markers: {
            size: 5
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center'
        }
    }

    return (
        <>
            <div className="pt-[3rem] h-auto w-full grid grid-cols-1 gap-4 bg-white">

                {/* <h1 className="text-3xl -my-1">
                    {retrofit.name} <span className="text-3xl ">Series</span>
                </h1> */}

                <div className="relative w-full flex flex-col justify-center items-center bg-gradient-to-br from-[#70ff70] to-[#ebfa14]">
                    {/* Main Image */}
                    <img src={retrofit.images[0]} className="p-4 object-contain w-full h-[350px]" alt={`${retrofit.name} Series`} />
                    {/* Information Section */}
                    <div className='text-black relative w-auto h-auto p-8  rounded-t-3xl bg-zinc-50 border-white space-y-4'>
						<h1 className="text-2xl">{retrofit.name} Series</h1>
                        <p>{retrofit.description}</p>
                    </div>
                </div>

                {/* Desktop */}
                <div className="hidden lg:block">
                    {/* Temperature / Power Table */}
                    <div className="grid grid-cols-12 py-20">
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

                        {/* Measurements */}
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

                    {/* Measurement Tables */}
                    {retrofit.tabletype === 1 ?
                        <div className="grid grid-cols-11 text-center py-20">
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
                        <div className="grid grid-cols-13 text-center py-20">
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

				
                <div className="py-20 px-4 block lg:hidden rounded-t-3xl bg-aurumblack">
                    {/* Table Header */}
                    <div className="text-center text-lg font-bold mb-4">{retrofit.name} Series Replacement Capacity</div>

                    {/* Cards for smaller screens */}
                    <div className="space-y-4">
                        {retrofit.capacityChart.map((item, index) => (
                            <div key={index} className="border border-white p-4 rounded-lg">
                                <div className="font-bold text-center mb-2">{item.title}</div>
                                {item.measurements.map((measurement, idx) => (
                                    <div key={idx} className="flex justify-between border-t border-white py-2">
                                        <span className="font-medium">{measurement.label}</span>
                                        <span>{measurement.value}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Heating / Cooling */}
                    <div className="text-center text-lg font-bold mt-8 mb-4">Heating / Cooling</div>
                    <div className="hidden md:grid md:grid-cols-12 gap-4 border border-white">
                        <div className="col-span-3 row-span-2 border border-white text-center p-2">MODE</div>
                        <div className="col-span-3 col-start-4 border border-white text-center p-2">EWT/LWT</div>
                        <div className="col-span-3 col-start-7 border border-white text-center p-2">EAT (DB)</div>
                        <div className="col-span-3 col-start-10 border border-white text-center p-2">EAT (WB)</div>
                        <div className="col-span-3 col-start-4 row-start-2 border border-white text-center p-2">DEGREE (°F)</div>
                        <div className="col-span-3 col-start-7 row-start-2 border border-white text-center p-2">DEGREE (°F)</div>
                        <div className="col-span-3 col-start-10 row-start-2 border border-white text-center p-2">DEGREE (°F)</div>
                    </div>

                    <div className="md:hidden space-y-4">
                        {retrofit.coolingHeating.map((item, index) => (
                            <div key={index} className="border border-white p-4 rounded-lg">
                                <div className="font-bold text-center mb-2">{item.title}</div>
                                {item.measurements.map((measurement, idx) => (
                                    <div key={idx} className="flex justify-between border-t border-white py-2">
                                        <span className="font-medium">{measurement.label}</span>
                                        <span>{measurement.value}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Line Graph */}
                <div>
                    <ApexCharts options={options} series={series} type="line" height={400} />
                </div>
            </div>
        </>
    );
};
