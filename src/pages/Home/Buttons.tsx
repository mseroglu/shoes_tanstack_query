type Props = {
   open: () => void
}

const Buttons = ({ open }:Props) => {
   return (
      <div className="flex gap-5 w-full mt-6">

         <button 
         onClick={open}
         className="flex flex-1 items-center justify-between gap-6 bg-white px-4 py-2 rounded-lg text-[14px] font-semibold lg:hidden">Filters
            <img src="list.svg" alt="list-icon" />
         </button>

         <button className="flex flex-1 items-center justify-between gap-6 bg-white px-4 py-2 rounded-lg text-[14px] font-semibold lg:hidden">Trending
            <img src="chevron_down.svg" alt="chevron_down" />
         </button>

      </div>
   )
}

export default Buttons
