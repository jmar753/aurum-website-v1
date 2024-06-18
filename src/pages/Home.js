import ShortVideo from "../RoughAssets/RoughMain.mp4"
import TreePhoto from "../RoughAssets/image2vector.svg"
import LoadReveal from "../animations/LoadReveal"

export default function Home(){

    const websiteArray = [
        {name:1},
    ]

    return(
        <div className="text-white relative">
            <div className="min-h-screen">
                    {/* Words*/}
                    <div className="absolute text-white flex flex-col gap-8 items-center justify-center z-30 h-screen w-1/2 sm:w-1/3 pl-3 sm:pl-16 text-xl font-bold">
                        <LoadReveal propDelay={8.0} className="">
                            <p className="">Old School Values With A New School Touch</p>
                            <p className="">View Products</p>
                        </LoadReveal>
                    </div>

                {/* Video */}
                <video className='absolute h-screen w-screen object-cover z-10' autoPlay muted>
                    <source src={ShortVideo} type='video/mp4'/>
                </video>
            </div>

            <div className="min-h-screen">
                
            </div>
        </div>
    )
}