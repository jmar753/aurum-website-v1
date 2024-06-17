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
            <div className="absolute px-8">
                <h1>Somthing About Aurum</h1>
                <p>Somthing idk</p>
            </div>

            {/* Video */}
            <video className='px-8 w-full' autoPlay muted>
                <source src={ShortVideo} type='video/mp4'/>
            </video>
        </div>
    )
}