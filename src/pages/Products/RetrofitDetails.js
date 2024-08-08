import { useParams } from "react-router-dom";
import { RetrofitData } from "../../data/RetrofitData";
import { useEffect, useState } from "react";
import NoPage from "../NoPage";
import { IoShareSocialOutline, IoBookmarkOutline } from "react-icons/io5";

export default function RetrofitDetails() {
    const [retrofit, setRetrofit] = useState(null);
    const { retrofitId } = useParams();

    useEffect(() => {
        setRetrofit(RetrofitData.find((item) => retrofitId === item.id));
    }, [retrofitId]);

    if (!retrofit) {
        return <NoPage />;
    }

    return (
        <div className="pt-[5rem] h-auto w-full bg-gradient-to-br from-leafgreen to-aurumblack">

            <div className="w-full flex flex-col justify-center items-center p-4 relative">
                {/* Product Image Card */}
                <div className="w-full aspect-w-1 aspect-h-1 bg-gradient-to-br from-leafgreen to-zinc-50 relative rounded-3xl">
                    {/* Main Image */}
                    <img 
                        src={retrofit.images[0]} 
                        className="object-contain w-full h-full pr-6 pt-2" 
                        alt={`${retrofit.name} Series`} 
                    />
                </div>

                {/* Absolute Assets */}
                <div className="absolute top-8 right-8 h-12 w-12 bg-aurumblack/70 rounded-full flex justify-center items-center">
                    <IoShareSocialOutline className="size-8 pr-1"/>
                </div>        
                <div className="absolute bottom-8 right-8 h-12 w-12 bg-aurumblack/70 rounded-full flex justify-center items-center">
                    <IoBookmarkOutline className="size-7"/>
                </div>        
            </div>

            <h1 className="text-2xl font-semibold pt-4 pb-5 text-center w-full">Aurum {retrofit.name} Series</h1>

            {/* White Section */}
            <div className='text-black relative w-auto h-auto px-4 py-8 rounded-t-3xl bg-zinc-50 border-white space-y-4'>
                <div className="grid grid-cols-2 gap-2">
                    <button className="rounded-lg bg-black w-full h-10 text-white"> View Modal</button>
                    <button className="rounded-lg bg-neutral-500 w-full h-10 text-white">Contact Us</button>
                </div>
                <p>{retrofit.description}</p>
            </div>   

            {/* Black Section */}
            <div className="bg-zinc-50">
                <div className="py-20 px-4 rounded-t-3xl bg-aurumblack">
                    {/* General Information */}
                    <div className="text-center text-lg font-bold mb-8">{retrofit.name} General Information</div>
                    <div className="md:hidden space-y-4">
                        {/* General information */}
                        <div className="font-bold text-center text-aurumgold-500">CFC Series Low Profile Vertical Fan Coil Unit Replacement Capacity</div>
                                    
                        {/* Cooling Card */}
                        <div className="rounded-lg">

                            {/* Title */}
                            <div className="rounded-t-lg bg-blue-500">
                                <h1 className="text-center py-2 font-semibold">Cooling</h1>
                            </div>

                            {/* Values */}
                            <div className="grid grid-cols-2 rounded-b-lg">
                                <div className="bg-white p-2 text-black border-r">Pressure Drop (Ft)</div>
                                <div className="bg-white p-2 text-black">{retrofit.coolingHeating[0].measurements[0]}</div>
                                
                                <div className="bg-zinc-100 p-2 text-black border-r">Water Flow (GPM)</div>
                                <div className="bg-zinc-100 p-2 text-black">{retrofit.coolingHeating[0].measurements[1]}</div>
                                
                                <div className="bg-white p-2 text-black border-r rounded-bl-lg">Total Cooling Capacity (BTUH)</div>
                                <div className="bg-white p-2 text-black rounded-br-lg">{retrofit.coolingHeating[0].measurements[2]}</div>
                            </div>
                        </div>

                        {/* Heating Card */}
                        <div className="rounded-lg">
                            
                            {/* Title */}
                            <div className="rounded-t-lg bg-rose-600">
                                <h1 className="text-center py-2 font-semibold">Heating</h1>
                            </div>

                            {/* Values */}
                            <div className="grid grid-cols-2 rounded-b-lg">
                                <div className="bg-white p-2 text-black border-r">Pressure Drop (Ft)</div>
                                <div className="bg-white p-2 text-black">{retrofit.coolingHeating[1].measurements[0]}</div>
                                
                                <div className="bg-zinc-100 p-2 text-black border-r">Water Flow (GPM)</div>
                                <div className="bg-zinc-100 p-2 text-black">{retrofit.coolingHeating[1].measurements[1]}</div>
                                
                                <div className="bg-white p-2 text-black border-r rounded-bl-lg">Total Cooling Capacity (BTUH)</div>
                                <div className="bg-white p-2 text-black rounded-br-lg"></div>
                            </div>
                        </div>
                    </div>

                    {/* Table Header */}
                    <div className="text-center text-lg font-bold mb-8 pt-20">{retrofit.name} Series Replacement Capacity</div>
                    {/* Cards for smaller screens */}
                    <div className="space-y-16">
                        {retrofit.capacityChart.map((item, index) => (
                            <div>
                                <p className="font-bold text-center pb-4">Modal #{index + 1}: {item.title}</p>
                                <div key={index} className="border border-white p-4 rounded-lg grid gap-4">
                                    <div className="font-bold text-center text-aurumgold-500">CFC Series Low Profile Vertical Fan Coil Unit Replacement Capacity</div>
                                    
                                    {/* Features Card */}
                                    <div className="rounded-lg">

                                        {/* Title */}
                                        <div className="rounded-t-lg bg-green-600">
                                            <h1 className="text-center py-2 font-semibold">Features</h1>
                                        </div>

                                        {/* Values */}
                                        <div className="grid grid-cols-2 rounded-b-lg">
                                            <div className="bg-white p-2 text-black border-r"># of Rows X Circuits</div>
                                            <div className="bg-white p-2 text-black">{item.measurements[0]}</div>
                                            
                                            <div className="bg-zinc-100 p-2 text-black border-r  rounded-bl-lg">E.S.P (In WC)</div>
                                            <div className="bg-zinc-100 p-2 text-black  rounded-br-lg">{item.measurements[1]}</div>
                                        </div>
                                    </div>
                                    
                                    {/* Cooling Card */}
                                    <div className="rounded-lg">

                                        {/* Title */}
                                        <div className="rounded-t-lg bg-sky-400">
                                            <h1 className="text-center py-2 font-semibold">Cooling</h1>
                                        </div>

                                        {/* Values */}
                                        <div className="grid grid-cols-2 rounded-b-lg">
                                            <div className="bg-white p-2 text-black border-r">Pressure Drop (Ft)</div>
                                            <div className="bg-white p-2 text-black">{item.measurements[5]}</div>
                                            
                                            <div className="bg-zinc-100 p-2 text-black border-r">Water Flow (GPM)</div>
                                            <div className="bg-zinc-100 p-2 text-black">{item.measurements[6]}</div>
                                            
                                            <div className="bg-white p-2 text-black border-r rounded-bl-lg">Total Cooling Capacity (BTUH)</div>
                                            <div className="bg-white p-2 text-black rounded-br-lg">{item.measurements[7]}</div>
                                        </div>
                                    </div>

                                    {/* Heating Card */}
                                    <div className="rounded-lg">
                                        
                                        {/* Title */}
                                        <div className="rounded-t-lg bg-red-600">
                                            <h1 className="text-center py-2 font-semibold">Heating</h1>
                                        </div>

                                        {/* Values */}
                                        <div className="grid grid-cols-2 rounded-b-lg">
                                            <div className="bg-white p-2 text-black border-r">Pressure Drop (Ft)</div>
                                            <div className="bg-white p-2 text-black">{item.measurements[2]}</div>
                                            
                                            <div className="bg-zinc-100 p-2 text-black border-r">Water Flow (GPM)</div>
                                            <div className="bg-zinc-100 p-2 text-black">{item.measurements[3]}</div>
                                            
                                            <div className="bg-white p-2 text-black border-r rounded-bl-lg">Total Cooling Capacity (BTUH)</div>
                                            <div className="bg-white p-2 text-black rounded-br-lg">{item.measurements[4]}</div>
                                        </div>
                                    </div>

                                    {/* Electrical Card */}
                                    <div className="rounded-lg">
                                        
                                        {/* Title */}
                                        <div className="rounded-t-lg bg-yellow-500">
                                            <h1 className="text-center py-2 font-semibold">Electrical</h1>
                                        </div>

                                        {/* Values */}
                                        <div className="grid grid-cols-2 rounded-b-lg">
                                            <div className="bg-white p-2 text-black border-r">UNIT FLA (A)</div>
                                            <div className="bg-white p-2 text-black">{item.measurements[8]}</div>
                                            
                                            <div className="bg-zinc-100 p-2 text-black border-r">UNIT MCA (A)</div>
                                            <div className="bg-zinc-100 p-2 text-black">{item.measurements[9]}</div>
                                            
                                            <div className="bg-white p-2 text-black border-r rounded-bl-lg">UNIT MOP (A)</div>
                                            <div className="bg-white p-2 text-black rounded-br-lg">{item.measurements[10]}</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
