import { Link } from "react-router-dom"
import Badge from "./Badge"

interface Props {
   data: Shoe
}

const Card = ({ data }: Props) => {
   // indirim verisi varsa hesapla
   const price = data.discount ? data.price * (1 - data.discount / 100) : data.discount

   return (
      <div className="flex flex-col gap-5 ">
         <div className="bg-white rounded-[28px] p-2 flex flex-col gap-5 relative">
            <img src={data.picture[0]} alt="img" className="rounded-[24px]" />
            <Badge discount={data?.discount} isNew={data.isNew} />
         </div>
         <h1 className="font-bold line-clamp-2">{data.name}</h1>

         <Link to={`/detail/${data.id}`}
            className="bg-black text-white text-center rounded-[8px] px-4 py-2 transition hover:opacity-75 mt-auto">
            View Product -
            <span className="text-yellow">
               {price && "$" + price}
            </span>
            <span className={`${price ? "line-through font-semibold text-xs text-red-400" : "text-yellow"}`}> $
               {data.price}
            </span>
         </Link >
      </div>
   )
}

export default Card
