import { useState } from "react"
import Filter from "../../components/Filter"
import Buttons from "./Buttons"
import Hero from "./Hero"
import List from "./List"


const Home = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  return (
    <div className="max-w-[1320px] mx-auto">
      <Hero />

      <Buttons open={()=> setIsFiltersOpen(true)} />

      <h1 className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[36px] font-semibold mt-6 md:mt-7 lg:mt-8 mb-5">Life Style Shoes</h1>

      {/**
       <div className="grid grid-cols-4 gap-5">
       */}
      <div className="flex gap-5">
        <Filter isOpen={isFiltersOpen} close={()=> setIsFiltersOpen(false)} />
        <List />
      </div>
    </div>
  )
}

export default Home
