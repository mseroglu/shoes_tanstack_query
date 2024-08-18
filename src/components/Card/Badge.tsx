

const Badge = ({ discount, isNew }:{discount?:number, isNew:boolean}) => {
  return (
   <span className={`absolute text-[12px] font-bold px-4 py-3 rounded-br-[24px] rounded-tl-[24px] ${!isNew && !discount && "hidden"} ${discount ? `bg-yellow` : "bg-blue text-white"}`}>
   {discount ? `${discount}% off` : "New"}
</span>
  )
}

export default Badge
