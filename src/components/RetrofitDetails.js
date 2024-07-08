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
            <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/400" alt="Product Image" class="w-full h-64 object-cover object-center"/>
        

            <div class="p-4">
              <h2 class="text-2xl font-semibold text-gray-800">Product Name</h2>
              <p class="text-gray-600 mt-2">Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        

              <div class="flex items-center mt-4">
                <span class="text-gray-800 text-xl font-semibold">$99.00</span>
                <span class="ml-2 text-sm text-gray-600">In Stock</span>
              </div>
        

              <button class="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Add to Cart
              </button>
        

              <div class="mt-6">
                <h3 class="text-lg font-semibold text-gray-800">Specifications</h3>
                <ul class="mt-2 text-gray-600">
                  <li>Size: Medium</li>
                  <li>Color: Blue</li>
                  <li>Material: Cotton</li>
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