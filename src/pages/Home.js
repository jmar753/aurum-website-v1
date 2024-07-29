import React, { useState } from 'react';
import { RetrofitData } from "../data/RetrofitData";

// libraries
import { motion } from 'framer-motion'; // Import Framer Motion if needed

// react-icons library: https://react-icons.github.io/react-icons/
import { FaCanadianMapleLeaf, FaUserTie, FaRibbon, FaHandshake, FaUserGroup, FaLinkedin, FaFacebook, FaInstagram, FaLocationDot, FaClock, FaAddressCard, FaArrowRight, FaArrowLeft, FaFacebookF } from "react-icons/fa6";

// About Photos
import AdamChillin from "../AssetPhotos/AdamChillin.png";
import OfficeBuilding from "../AssetPhotos/AurumFront.png";

// Rough Assets
import ShortVideo from "../RoughAssets/RoughMain.mp4";

// animations
import SideReveal from "../animations/SideReveal";
import Reveal from "../animations/Reveal";
import { FaPhoneAlt } from 'react-icons/fa';

export default function Home() {
    const [mainFit, setMainFit] = useState(0);

	const itterateUp = () => {
		var temp = mainFit + 1
		if (temp > 4){
			setMainFit(0);
		}
		else{
			setMainFit(temp);
		}
	};

	const itterateDown = () => {
		var temp = mainFit - 1
		if (temp < 0){
			setMainFit(4);
		}
		else{
			setMainFit(temp);
		}
	};
  
  const AboutArray = [
    { icon: FaCanadianMapleLeaf, description: "Canadian Based Manufacturer", size: "size-[4rem]" },
    { icon: FaUserTie, description: "Trusted by Property Managers & Trade Technicians ", size: "size-[7rem]" },
    { icon: FaUserGroup, description: "A Family Business With Over 40 years Experience", size: "size-[4rem]" },
    { icon: FaHandshake, description: "100% Satisfaction Guaranteed" },
    { icon: FaRibbon, description: "Made With The Highest Quality & Craftsmanship" },
  ];

 	const BannerArray =[
		{icon: FaClock, text1:"Open Weekdays", text2:"8:00 am to 4:00 pm"},
		{icon: FaLocationDot, text1:"Vaughan, ON L4K 0J9", text2:"200 Tesma Way #7"},
		{icon: FaAddressCard, text1:"About Us", text2:"Learn about our company!"},
		{icon: FaClock, text1:"Contact Us", text2:"Set up your dream AC today!"},
	]

  return (
		<>
			{/* Introduction */}
			<div className="h-screen flex flex-col lg:flex-row lg:relative">
				{/* Written Section */}
				<div className="flex flex-col gap-8 justify-center z-30 h-auto w-auto m-8 lg:m-0 lg:h-screen lg:w-1/2 pl-0 lg:pl-16 text-xl">
					<SideReveal propDelay={7.9} className="">
					<div className="pt-10 lg:pt-2 text-center lg:text-left space-y-2">
						<h1 className="text-4xl lg:text-7xl text-gray-100">Old School Values With A New School Touch</h1>
						<h1 className="py-2 text-aurumgold-700">"40 Years of Excellence in HVAC Solutions for Apartments and Businesses"</h1>
						<div className="grid grid-cols-2 gap-4 pt-4">
							<button className="w-full h-12 rounded-lg bg-leafgreen text-white">Our Products</button>
							<button className="w-full h-12 rounded-lg text-white bg-naturegreen-300">Contact Us</button>
						</div>
					</div>
					</SideReveal>
				</div>

				{/* Video BG */}
				<div className="relative w-full lg:absolute lg:h-screen">
					<video className='h-full w-full lg:object-cover z-10' autoPlay muted>
						<source src={ShortVideo} type='video/mp4' />
					</video>
				</div>
			</div>

			{/* Banner */}
			<div className='relative h-[150px] w-full bg-[#079030dc] grid grid-cols-4'>
			{BannerArray.map((items, index) => (
				<div className='flex justify-center items-center gap-4' key={index}>
					<items.icon className='size-8'/>
					<div className='justify-center items-center text-aurumwhite'>
						<p className='text-2xl'>{items.text1}</p>
						<p>{items.text2}</p>
					</div>
				</div>
			))}
			</div>


			<div className="flex flex-col justify-center items-center font-lufga">

				{/* Main 1 */}
				<>
					<Reveal className="flex justify-center pb-16 pt-28 w-full px-8">
						<div className="flex flex-col lg:flex-row justify-between max-w-7xl w-full">
							<h1 className="text-6xl lg:text-7xl">Retrofits</h1>
							<div className="text-lg lg:text-right">
								<p className="lg:text-4xl">Invisible Comfort, Unmatched Feel.</p>
								<p className="lg:text-xl text-zinc-300">Experience 40+ years of HVAC Excellence.</p>
							</div>
						</div>
					</Reveal>
					<div className='pb-28 px-8'>
						<Reveal className="relative max-w-7xl w-full bg-aurumgreen-800 rounded-3xl overflow-hidden">
							<div className="relative flex flex-col justify-center items-center h-auto overflow-hidden">

								{/* Vibrant Gradient Background */}
								<div className="absolute inset-0 overflow-hidden">
									{/* Main Gradient Background */}
									<div className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#004d00] via-[#009933] to-[#FFEB3B] opacity-80"></div>

									{/* Lighter Green Accents */}
									<div className="absolute inset-0 h-full w-full">
									<div className="absolute top-10 left-10 h-[300px] w-[300px] bg-gradient-to-tl from-[#009933] to-[#b2e1b1] opacity-60 blur-2xl"></div>
									<div className="absolute top-1/3 right-1/3 h-[250px] w-[250px] bg-gradient-to-tr from-[#004d00] to-[#80e0a1] opacity-50 blur-2xl"></div>
									<div className="absolute bottom-10 left-1/4 h-[200px] w-[200px] bg-gradient-to-bl from-[#004d00] to-[#a8e6a2] opacity-40 blur-2xl"></div>
									<div className="absolute bottom-20 right-20 h-[180px] w-[180px] bg-gradient-to-br from-[#009933] to-[#d0f0d0] opacity-50 blur-2xl"></div>
									</div>

									{/* Horizontal Lines */}
									<div className="absolute inset-0 h-full w-full">
									<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-[#003300] opacity-40 blur-xl"></div>
									<div className="absolute top-8 left-0 w-full h-1 bg-gradient-to-r from-transparent to-[#003300] opacity-40 blur-xl"></div>
									<div className="absolute top-16 left-0 w-full h-1 bg-gradient-to-r from-transparent to-[#003300] opacity-40 blur-xl"></div>
									<div className="absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-transparent to-[#003300] opacity-40 blur-xl"></div>
									<div className="absolute top-32 left-0 w-full h-1 bg-gradient-to-r from-transparent to-[#003300] opacity-40 blur-xl"></div>
									</div>

									{/* Additional Gradient Layer for Depth */}
									<div className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#004d00] via-[#009933] to-[#FFEB3B] opacity-40 blur-3xl"></div>

									{/* Concentric Rings Accent */}
									<div className="absolute top-1/2 left-[20%] transform -translate-y-1/2 flex flex-col justify-center items-center">
									<div className="absolute rounded-full border-2 border-aurumwhite h-[100px] w-[100px] opacity-30"></div>
									<div className="absolute rounded-full border-2 border-aurumwhite h-[200px] w-[200px] opacity-30"></div>
									<div className="absolute rounded-full border-2 border-aurumwhite h-[300px] w-[300px] opacity-30"></div>
									<div className="absolute rounded-full border-2 border-aurumwhite h-[400px] w-[400px] opacity-30"></div>
									<div className="absolute rounded-full border-2 border-aurumwhite h-[500px] w-[500px] opacity-30"></div>
									</div>
								</div>

								{/* Introduction */}
								<div className="relative z-10 grid grid-cols-3 p-8">
									{/* Left Arrow */}
									<div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4" onClick={itterateUp}>
										<button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
											<FaArrowLeft className="text-white text-2xl" />
										</button>
									</div>

									{/* Body text and image */}
									<div className="col-span-3 md:col-span-2 grid grid-cols-3">
										<div className="col-span-1">
											<motion.img
												key={RetrofitData[mainFit].images[1]}
												src={RetrofitData[mainFit].images[1]}
												className="w-full"
												alt="Retrofit"
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ duration: 0.5 }}
											/>
										</div>
										<div className="col-span-2 flex items-center justify-center">
											<div>
												<h1 className="text-4xl text-white font-lufga">{RetrofitData[mainFit].name} Series</h1>
												<p>{RetrofitData[mainFit].description}</p>
											</div>
										</div>
									</div>

									{/* Right Arrow */}
									<div className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4" onClick={itterateDown}>
										<button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
											<FaArrowRight className="text-white text-2xl" />
										</button>
									</div>
								</div>
							</div>
						</Reveal>
					</div>
				</>

				{/* Main3 */}
				<div className="py-28 text-left max-w-7xl w-full space-y-16 px-8">
					{/* Title */}
					<Reveal className="flex justify-between items-center w-full">
						<h1 className="text-5xl">What is Aurum Manufacturing</h1>
						<div className="border-t-2 border-white flex-grow ml-4"></div>
					</Reveal>
					<Reveal>
						<p>Aurum Manufacturing, based in Canada, specializes in providing replacement solutions for outdated fan coil systems and retrofits in apartments, condos, businesses businesses. Join us on our journey to becoming a leading HVAC solutions company in Canada.
						</p>
						<div className="flex flex-col md:flex-row pt-16 gap-4 relative">
							<div className="relative h-80 w-full md:w-1/2 rounded-xl">
								<div className="absolute h-full w-full z-20 rounded-xl bg-gradient-to-t from-black to-naturegreen-500/0"></div>
								<img alt="Aurum Office" src={OfficeBuilding} className="absolute h-full w-full rounded-xl object-cover" />
								<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 z-20">
									<p className=" text-2xl">About Us</p>
									<p className="underline">Read our Journey</p>
								</div>
							</div>

							<div className="relative h-80 w-full md:w-1/2 rounded-xl">
								<div className="absolute h-full w-full z-20 rounded-xl bg-gradient-to-t from-black to-naturegreen-500/0"></div>
								<img src={AdamChillin} alt="Aurum Office" className="absolute h-full w-full rounded-xl object-cover z-10" />
								<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 z-30">
									<p className=" text-2xl">Our Story</p>
									<p className="underline">Read our Journey</p>
								</div>
							</div>
							<div className="absolute hidden bg-naturegreen-800 w-screen h-[300px] -bottom-32 -left-4 z-0"></div>
						</div>
					</Reveal>
				</div>

				{/* Main4 */}
				<div className="py-28 text-left max-w-7xl w-full space-y-16 px-8">
					{/* Title */}
					<Reveal className="flex flex-col lg:flex-row justify-between lg:items-center w-full">
						<h1 className="text-5xl lg:w-3/5">Why buy Retrofits from Aurum Manufacturing</h1>
						<div className="border-t-2 border-white flex-grow ml-4"></div>
					</Reveal>

					{/* Card Sidescroll */}
					<Reveal className="flex overflow-x-auto py-8 space-x-4">
						{AboutArray.map((item, index) => (
							<motion.div
								key={index}
								className="flex-shrink-0 max-w-md w-full bg-[#1a1a1a] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
								whileHover={{ scale: 1.02 }} // Optional: Add Framer Motion effect
							>
								<div className="p-8 space-y-4">
									<item.icon className="text-white h-6 w-6 lg:h-10 lg:w-10" />
									<h2 className="text-2xl  text-white">{item.description}</h2>
									<p className="text-gray-300">
										{item.description}
									</p>
								</div>
							</motion.div>
						))}
					</Reveal>
				</div>

				{/* Main5 */}
				<div className="py-28 text-left max-w-7xl w-full space-y-16 px-8">
					<Reveal className="flex overflow-x-auto w-full h-auto">
						<div className="grid lg:grid-cols-3 gap-4 w-full">
							<div className="flex flex-col  items-start w-full col-span-2">
								<div className="lg:px-12 grid grid-cols-2 w-full gap-8">
                                    <div className='col-span-2'>
                                        <p className='text-7xl'>Contact Us</p>
                                    </div>
                                    <div className="space-y-1">
                                        <h1 className="text-xl ">Call us</h1>
										<p className="text-gray-500">Have questions? Call us personally</p>
                                        <div  className="flex items-center gap-x-2  underline">
                                                <FaPhoneAlt/>
                                                <p>905-597-4799 | info@aurum-m.com</p>
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <h1 className="text-xl ">Visit us</h1>
                                        <p className="text-gray-500">Talk to us in person at our Vaughan HQ</p>
                                        <div  className="flex items-center gap-x-2  underline">
                                                <FaLocationDot/>
                                                <p>200 Tesma Way #7, Vaughan, ON L4K 0J9</p>
                                        </div>
                                    </div>

									{/* Social Media Icons */}
									<div className="flex gap-x-6 col-span-2">
										<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700">
											<FaLinkedin className="text-4xl" />
										</a>
										<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500">
											<FaInstagram className="text-4xl" />
										</a>
										<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
											<FaFacebookF className="text-4xl" />
										</a>
									</div>
								</div>
							</div>
							<div className="w-full aspect-w-1 aspect-h-1">
								<div className='p-12'>
									<iframe
									title="Google Map"
									className="absolute inset-0 w-full h-full border-0 rounded-3xl"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.3780731200293!2d-79.52551568450297!3d43.82485507911507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a3403aaf247%3A0xb71f8d3f4f3df8c1!2s200%20Tesma%20Way%20%237%2C%20Vaughan%2C%20ON%20L4K%200J9%2C%20Canada!5e0!3m2!1sen!2sus!4v1690645821577!5m2!1sen!2sus"
									allowFullScreen=""
									loading="lazy"
									/>
								</div>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</>
  );
}
