import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

const Size = ({ selected, setSelected}:PropsSelected) => {
   const numbers = ["38", "39", "40", "41", "42", "43", "44", "45", "46", "47"]
   const [params, setParams] = useSearchParams()
   

   const toggle = (num: string) => {
      const found = selected.find(i => i === num)
      if (found) {
         setSelected(selected.filter(i => i !== num))
      } else {
         setSelected([...selected, num])
      }
   }

   useEffect(() => {
      if (selected.length > 0) {
         params.set("size", selected.join(","))
      }else{
         params.delete("size")
      }
      setParams(params)
   }, [selected])

   return (
      <div>
         <h1 className="font-semibold mb-4">Size</h1>
         <div className="grid grid-cols-5 gap-4">
            {
               numbers.map((num) => {
                  const a = selected.find(i => i === num) ? "bg-black text-white" : "bg-white text-black"

                  return (
                     <p onClick={() => toggle(num)} key={num}
                        className={`px-4 py-[10px] rounded-md h-12 w-[50.25px] font-semibold text-center cursor-pointer hover:scale-105 items-center transition ${a}`}>
                        <span className="select-none">{num}</span>
                     </p>
                  )
               }
               )
            }
         </div>
      </div>
   )
}

export default Size
