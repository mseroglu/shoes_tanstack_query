import { useSearchParams } from "react-router-dom"
import Color from "./Color"
import Gender from "./Gender"
import Price from "./Price"
import Size from "./Size"
import { useState } from "react"

type Props = {
   isOpen: boolean,
   close: () => void
}

const Filter = ({ isOpen, close }: Props) => {
   const [params, setParams] = useSearchParams()
   const [size, setSize] = useState<string[]>(params.get("size")?.split(",") || [])
   const [color, setColor] = useState<string[]>(params.get("color")?.split(",") || [])
   const [gender, setGender] = useState<string[]>(params.get("gender")?.split(",") || [])
   const [price, setPrice] = useState<string>(params.get("price")|| "0")

   const handleReset = () => {
      setParams({})
      setSize([])
      setColor([])
      setGender([])
      setPrice("0")
   }

   return (

      <div className={`${isOpen ? "max-lg:fixed max-lg:inset-0" : "max-lg:hidden"} max-lg:bg-zinc-500 max-lg:bg-opacity-50 md:w-auto max-lg:grid max-lg:place-items-center z-10`}>
         {/*
         <div className={`${isOpen ? "max-lg:fixed max-lg:inset-0" : "max-lg:hidden"} max-lg:bg-zinc-500 max-lg:bg-opacity-50 md:col-span-1 max-lg:grid max-lg:place-items-center z-10`}>          
          */}
         <div className="bg-gray mx-auto w-fit max-lg:rounded-lg overflow-hidden h-fit">
            <div className="font-semibold md:font-bold text-[14px] md:text-2xl max-lg:bg-white flex justify-between max-lg:p-4 ">Filters
               <img src="iconoir_cancel.svg" alt="cancel" className="cursor-pointer lg:hidden" onClick={close} />
            </div>

            <form className="flex flex-col gap-4 md:gap-6 py-4 max-lg:p-4">
               <Size selected={size} setSelected={setSize} />
               <Color selected={color} setSelected={setColor} />
               <Gender selected={gender} setSelected={setGender}/>
               <Price value={price} setValue={setPrice}/>
               <button type="reset" onClick={handleReset}
                  className="text-center bg-white text-zinc-600 font-semibold rounded-b-lg px-4 py-2 w-full hover:bg-zinc-700 hover:text-white transition ">Filtreleri Temizle</button>
            </form>

         </div>
      </div>
   )
}

export default Filter 