import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

const Size = ({ data }: { data: string }) => {
   const numbers = ["38", "39", "40", "41", "42", "43", "44", "45", "46", "47"]
   const [selected, setSelected] = useState<string>("")


   const toggle = (num: string) => {
      setSelected(num === selected ? "" : num)
   }


   return (
      <div>
         <h1 className="font-bold text-[16px] mb-4 select-none">SIZE</h1>
         <div className="flex flex-wrap gap-1">
            {
               numbers.map((num) => {
                  const a = selected === num ? "bg-black text-white" : "bg-white text-black"

                  return (
                     <button disabled={!data.includes(num)} onClick={() => toggle(num)} key={num} style={{}}
                        className={`px-4 py-[10px] rounded-md h-12 w-[50.25px] font-semibold text-center cursor-pointer hover:scale-105 items-center transition ${a} disabled:text-zinc-400 disabled:bg-[#D2D1D3]`}>
                        <span className="select-none">{num}</span>
                     </button>
                  )
               }
               )
            }
         </div>
      </div>
   )
}

export default Size

