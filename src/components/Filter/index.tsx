import Color from "./Color"
import Gender from "./Gender"
import Price from "./Price"
import Size from "./Size"

type Props = {
   isOpen: boolean,
   close: () => void
}

const Filter = ({ isOpen, close }: Props) => {

   return (
      <div className={`${isOpen ? "max-lg:fixed max-lg:inset-0" : "max-lg:hidden"} max-lg:bg-zinc-500 max-lg:bg-opacity-50 md:col-span-1 max-lg:grid max-lg:place-items-center z-10`}>
         <div className="bg-gray mx-auto w-fit max-lg:rounded-lg overflow-hidden ">
            <div className="font-semibold md:font-bold text-[14px] md:text-2xl max-lg:bg-white flex justify-between max-lg:p-4">Filters
               <img src="iconoir_cancel.svg" alt="cancel" className="cursor-pointer lg:hidden" onClick={close} />
            </div>
            <div className="flex flex-col gap-4 md:gap-6 py-4 max-lg:p-4">
               <Size />
               <Color />
               <Gender />
               <Price />
            </div>
         </div>
      </div>
   )
}

export default Filter 