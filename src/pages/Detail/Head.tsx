

const Head = ({ data }: { data: Shoe }) => {
   const sale_price = data.discount && data.price * (1 - data.discount / 100)

   return (
      <div className="flex flex-col gap-4">
         {(data.isNew || data.discount) && (
            <span className={`${data.discount ? "bg-yellow text-black" : "bg-blue text-white"} rounded-[12px] w-fit py-3 px-4 text-[12px] font-bold `}>
               {data.discount ? `${data.discount}% Discount` : "New Release"}
            </span>
         )
         }
         <h1 className="text-dark text-[28px] font-bold m-0">{data.name}</h1>
         <div className="text-blue text-[24px] font-bold">
            {
               sale_price&&(<span> ${sale_price}.00 </span>)
            }            
            <span className={sale_price ? "line-through text-dark text-sm":""}> ${data.price}.00 </span>
         </div>
      </div>
   )
}

export default Head
