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
                    <div className="absolute text-white text-center pl-16 flex flex-col items-center justify-center z-30 h-screen w-1/3">
                        <LoadReveal propDelay={8.0}>
                            <h1>Logo</h1>
                            <p>Old School Values With A New School Touch</p>
                            <p>Aurum is a family owned and operated business that operates with more emphasis on customer relationships rather than sale making. Building a meaningful relationship with our customers, suppliers, vendors, and every individual in our process is our main focus as a company. Aurum prides ourselves in treating each customer like they’re our only customer, not just another number. We believe our success is meaningless without integrity. </p>
                            <p>Learn More</p>
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