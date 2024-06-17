import ShortVideo from "../RoughAssets/RoughMain.mp4"
import ThreePhoto from "../RoughAssets/3productDisplay.png"

export default function Home(){
    return(
        // <div className="text-white">
        //     <video className='px-8 w-full' autoPlay loop muted>
        //         <source src={ShowVideo} type='video/mp4'/>
        //     </video>
        // </div>
        
        <div className="text-white relative">
            {/* Words*/}
            <div className="absolute flex flex-col items-center justify-center">
                <h1>Logo</h1>
                <p>Old School Values With A New School Touch</p>
            </div>

            {/* Video */}
            <video className=' w-full' autoPlay muted>
                <source src={ShortVideo} type='video/mp4'/>
            </video>
        </div>
    )
}