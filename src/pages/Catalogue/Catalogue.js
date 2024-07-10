import { RetrofitData } from "../../data/RetrofitData"

export default function Catalogue(){

    return(
        <div className="h-screen flex flex-col justify-center items-center">
            <h1>Dynamic Routing Test</h1>
            {RetrofitData.map((item, index) => (
                <div key={index}>
                    <a href={"/catalogue/" + item.id}>{item.name}</a>
                </div>
            ))}
        </div>
    )
}