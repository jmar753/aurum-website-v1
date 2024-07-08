import { useParams } from "react-router-dom"
import { RetrofitData } from "../data/RetrofitData"
import { useEffect, useState } from "react";
import NoPage from "../pages/NoPage";

export const RetrofitDetails = () => {
    const [retrofit, setRetrofit] = useState({})

    const { retrofitId } = useParams();
    useEffect(() => {
        let temp = {}
        setRetrofit(RetrofitData.find((item) => retrofitId === item.id))
    }, [retrofitId]);

    if (typeof retrofitId.id !== undefined) {    
        return <NoPage/> 
    } 
    else{
        return(
            <div className="h-screen flex flex-col justify-center items-center">
                <p>RetrofitDetails: {retrofit.id}</p>
                <p>RetrofitDescription: {retrofit.description}</p>
            </div>
        )
    } 
      
}