import ShowVideo from "../RoughAssets/ShowVideo.mp4"
import ShortVideo from "../RoughAssets/ShowVideo - Trim.mp4"
import ThreePhoto from "../RoughAssets/3productDisplay.png"

export default function Home(){
    return(
        // <div className="text-white">
        //     <video className='px-8 w-full' autoPlay loop muted>
        //         <source src={ShowVideo} type='video/mp4'/>
        //     </video>
        // </div>
        <div className="text-white">
            <video className='px-8 w-full' autoPlay muted>
                <source src={ShortVideo} type='video/mp4'/>
            </video>
        </div>
    )
}