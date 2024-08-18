import { useEffect } from "react"
import { colors } from "../../utils/constants"
import { useSearchParams } from "react-router-dom"


const Color = ({ selected, setSelected}:PropsSelected) => {
   const [params, setParams] = useSearchParams()

   const toggle = (color: string) => {
      const found = selected.find(clr => clr === color)
      if (found) {
         setSelected(selected.filter(i => i !== color))
      } else {
         setSelected([...selected, color])
      }
   }

   useEffect(() => {
      if (selected.length > 0) {
         params.set("color", selected.join(","))
      } else {
         params.delete("color")
      }
      setParams(params)
   }, [selected])

   return (
      <div>
         <h1 className="font-semibold mb-4">Colors</h1>
         <div className="grid grid-cols-5 gap-4">
            {
               colors.map((color) => {
                  const a = selected.find(clr => clr === color.id) ? "ring" : " "

                  return (
                     <span onClick={() => toggle(color.id)} key={color.id} style={{ background: color.code }}
                        className={`rounded-md h-12 w-[50.25px] cursor-pointer hover:scale-105 transition ${a}`}>
                     </span>
                  )
               }
               )
            }
         </div>
      </div>
   )
}

export default Color

