export default function Contact(){
    return(
        <div className="bg-aurumgrey h-screen w-full flex items-center justify-center text-white">
            <div className="w-[2000px]">

                {/* Opener */}
                <h1>Contact our team</h1>
                <p>Got any questions? We're here to help. Shoot an email to our team and we will be sure to reach back.</p>

                {/* Form */}
                <div className="grid grid-cols-2">
                    {/* Email side */}
                    <div className="bg-red-900">
                        <form className="max-w-md mx-auto">
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <label for="small-input" className="block mb-2 font-semibold text-white">Small input</label>
                                    <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-aurumgreen-500 focus:border-aurumgreen-500"/>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <label for="small-input" className="block mb-2 font-semibold text-white">Small input</label>
                                    <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-aurumgreen-500 focus:border-aurumgreen-500"/>
                                </div>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label for="small-input" className="block mb-2 font-semibold text-white">Small input</label>
                                <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-aurumgreen-500 focus:border-aurumgreen-500"/>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label for="small-input" className="block mb-2 font-semibold text-white">Small input</label>
                                <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-aurumgreen-500 focus:border-aurumgreen-500"/>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label for="small-input" className="block mb-2 font-semibold text-white">Small input</label>
                                <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-aurumgreen-500 focus:border-aurumgreen-500"/>
                            </div>
                            <button type="submit" className="text-white bg-aurumgreen-700 hover:bg-aurumgreen-800 focus:ring-4 focus:outline-none focus:ring-aurumgreen-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-aurumgreen-600 dark:hover:bg-aurumgreen-700 dark:focus:ring-aurumgreen-800">Submit</button>
                        </form>
                    </div>

                    {/* Contact List */}
                    <div className="bg-green-900">
                        <h1>Chat with us</h1>
                        <p>Speak to our friendly team VIA phone or email</p>

                        <p>Send an email</p>
                        <p>Message us on LinkedIn</p>
                        <p>Visit our Facebook</p>
                        <p>Follow our Instagram</p>

                        <h1>Call us</h1>
                        <p>Call our team Mon-Fri from 8am to 4pm</p>
                        <p>number here</p>

                        <h1>Visit us</h1>
                        <p>Talk to us in person at our Vaughan HQ</p>
                        <p>location here</p>
                    </div>

                </div>
            </div>

        </div>
    )
}