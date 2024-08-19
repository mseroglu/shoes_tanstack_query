import { colors } from "../../utils/constants"

const Color = ({ data }: { data: string }) => {
   const my_color = data.split(",")
   const filtered = colors.filter(i => my_color.find(a => i.id === a))

   return (
      <div>
         <h1 className="font-bold text-[16px] mb-2 select-none">COLOR</h1>
         <div className="flex gap-2">
            {
               filtered.map((item, i) => (
                  <div 
                  className="p-2 rounded-full" 
                  style={i === 0 ? { border: "2px solid " + item.code } : {}}>
                     <div style={{ background: item.code }} key={item.id}
                        className={`h-8 w-8 rounded-full cursor-pointer`}>
                     </div>
                  </div>
               ))
            }
         </div>
      </div>
   )
}

export default Color
