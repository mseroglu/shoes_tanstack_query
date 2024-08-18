import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";


const Price = () => {
   const [params, setParams] = useSearchParams()
   const initial = params.get("price")|| "0"
   const [value, setValue] = useState<string>(initial)
   
   // değer çok hızlı değiştiğinde bekleme yapması ve üstüste api istekleri yapmaması için
   const debouncedValue = useDebounce(value, 500);

   useEffect(() => {
      if (+debouncedValue > 0) {
        params.set("price", debouncedValue)
      } else {
        params.delete("price")
      }
      setParams(params)
    }, [debouncedValue])

   return (
      <div>
         <h1 className="font-semibold mb-4">Price </h1>

         <div>
            <input onChange={(e)=> setValue(e.target.value)} 
            value={value}
            type="range" name="price" id="price" max={1000} min={0} step={5} className="w-full" />
            <div className="flex justify-between text-xs font-semibold">
               <span>${value}</span>
               <span>${1000}</span>
            </div>
         </div>
      </div>
   )
}

export default Price
