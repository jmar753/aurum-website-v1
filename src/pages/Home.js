import { RetrofitData } from "../data/RetrofitData"

export default function Home() {
    return (
        <div className="px-8">
            <div className="relative bg-aurumgreen-800 rounded-3xl overflow-hidden">
                <div className="relative flex flex-col justify-center items-center h-auto overflow-hidden">
                    {/* Vibrant Gradient Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Main Gradient Background */}
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#004d00] via-[#009933] to-[#FFEB3B] opacity-80"></div>

                        {/* Lighter Green Accents */}
                        <div className="absolute inset-0 h-full w-full">
                            <div className="absolute top-10 left-10 h-[300px] w-[300px] bg-gradient-to-tl from-[#009933] to-[#b2e1b1] opacity-60 blur-2xl"></div>
                            <div className="absolute top-1/3 right-1/3 h-[250px] w-[250px] bg-gradient-to-tr from-[#004d00] to-[#80e0a1] opacity-50 blur-2xl"></div>
                            <div className="absolute bottom-10 left-1/4 h-[200px] w-[200px] bg-gradient-to-bl from-[#004d00] to-[#a8e6a2] opacity-40 blur-2xl"></div>
                            <div className="absolute bottom-20 right-20 h-[180px] w-[180px] bg-gradient-to-br from-[#009933] to-[#d0f0d0] opacity-50 blur-2xl"></div>
                        </div>

                        {/* Horizontal Lines */}
                        <div className="absolute inset-0 h-full w-full">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-[#003300] opacity-40 blur-xl"></div>
                            <div className="absolute top-8 left-0 w-full h-1 bg-gradient-to-r from-transparent to-[#003300] opacity-40 blur-xl"></div>
                            <div className="absolute top-16 left-0 w-full h-1 bg-gradient-to-r from-transparent to-[#003300] opacity-40 blur-xl"></div>
                            <div className="absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-transparent to-[#003300] opacity-40 blur-xl"></div>
                            <div className="absolute top-32 left-0 w-full h-1 bg-gradient-to-r from-transparent to-[#003300] opacity-40 blur-xl"></div>
                        </div>

                        {/* Additional Gradient Layer for Depth */}
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#004d00] via-[#009933] to-[#FFEB3B] opacity-40 blur-3xl"></div>

                        {/* Concentric Rings Accent */}
                        <div className="absolute top-1/2 left-[20%] transform -translate-y-1/2 flex flex-col justify-center items-center">
                            <div className="absolute rounded-full border-2 border-aurumwhite h-[100px] w-[100px] opacity-30"></div>
                            <div className="absolute rounded-full border-2 border-aurumwhite h-[200px] w-[200px] opacity-30"></div>
                            <div className="absolute rounded-full border-2 border-aurumwhite h-[300px] w-[300px] opacity-30"></div>
                            <div className="absolute rounded-full border-2 border-aurumwhite h-[400px] w-[400px] opacity-30"></div>
                            <div className="absolute rounded-full border-2 border-aurumwhite h-[500px] w-[500px] opacity-30"></div>
                        </div>
                    </div>

                    {/* Introduction */}
                    <div className="relative z-40 px-10 flex flex-col items-center">
                        <h1 className="text-7xl text-white py-20 font-lufga">Lufga CFC Series</h1>
                        <img src={RetrofitData[0].images[1]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
