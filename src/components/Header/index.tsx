import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header className="flex justify-between max-w-[1320px] p-[32px] bg-fa_white rounded-xl md:rounded-3xl m-auto">
      <div className="max-md:hidden text-dark flex gap-10 font-semibold items-center">
        <Link to={"/"} >New Drops 🔥</Link>
        <Link to={"/"} >Men</Link>
        <Link to={"/"} >Women</Link>
      </div>

      <button className="md:hidden">
        <img src="menu.svg" alt="menu" />
      </button>

      <Link to="/">
        <img src="/Logo.svg" alt="logo" className="w-[128px] h-[32px]" />
      </Link>

      <div className="flex gap-[9px] md:gap-[40px] items-center">

        <button className="max-md:hidden">
          <img src="search.svg" alt="search" />
        </button>

        <button>
          <img src="User.svg" alt="UserIcon" />
        </button>

        <button className="rounded-full w-[25px] h-[25px] bg-yellow text-black font-semibold">
          0
        </button>
      </div>
    </header>
  )
}

export default Header
