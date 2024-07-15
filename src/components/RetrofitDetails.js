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
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/400" alt="Product Image" className="w-full h-64 object-cover object-center"/>
        

            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800">Product Name</h2>
              <p className="text-gray-600 mt-2">Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        

              <div className="flex items-center mt-4">
                <span className="text-gray-800 text-xl font-semibold">$99.00</span>
                <span className="ml-2 text-sm text-gray-600">In Stock</span>
              </div>
        

              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Add to Cart
              </button>
        

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800">Specifications</h3>
                <ul className="mt-2 text-gray-600">
                  <li>Size: Medium</li>
                  <li>Something: Something</li>
                </ul>
              </div>
            </div>
          </div>
        )
    } 
    else{
        return <NoPage/>
    } 
      
}