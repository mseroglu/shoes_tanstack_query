

const Hero = () => {
  return (
   <div className="relative mt-[24px] sm:mt-[60px] md:mt-[80px] ">
   <div className="absolute text-white top-1/2 transform -translate-y-1/2 left-[40px]">
     <p className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-semibold">Limited by only</p>
     <h2 className="text-[20px] sm:text-[40px] md:text-[56px] lg:text-[74px] font-semibold"> Get 30% off </h2>
     <p className="text-[10px] sm:text-[13px] md:text-[16px] lg:text-[20px] w-[80%] sm:w-[70%] lg:w-[60%]">Sneakers made with your comfort in mind so you can put all of your focus into your next session.</p>
   </div>
   <img src="bg.svg" alt="bg-shoes" />
 </div>
  )
}

export default Hero
