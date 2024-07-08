import { useParams } from "react-router-dom"
import { RetrofitData } from "../data/RetrofitData"
import { useEffect, useState } from "react";
import NoPage from "../pages/NoPage";

export const RetrofitDetails = () => {
    const [retrofit, setRetrofit] = useState({id:'naw'})
    const { retrofitId } = useParams();

    {/* Render Fit Data */}
    useEffect(() => {
        setRetrofit(RetrofitData.find((item) => retrofitId === item.id))
    }, [retrofitId]);

    {/* Return Corresponding page */}
    if (retrofit) {    
        return (
            <div className="h-screen flex flex-col justify-center items-center">
                <p>RetrofitDetails: {retrofit.id}</p>
                <p>RetrofitDescription: {retrofit.description}</p>
            </div>
        )
    } 
    else{
        return <NoPage/>
    } 
      
}