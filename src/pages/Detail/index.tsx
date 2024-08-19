import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import api from "../../utils/api"
import Loader from "../../components/Loader"
import Error from "../../components/Error"
import Head from "./Head"
import Color from "./Color"
import Size from "./Size"


const Detail = () => {
  const { id } = useParams()

  const { isLoading, error, data } = useQuery<Shoe>({
    queryKey: ["shoe"],
    queryFn: () => api.get("/shoes/" + id).then((res) => res.data)
  })

  console.log(data)
  return (
    <div className="mt-8 max-w-[1320px] mx-auto">
      {isLoading
        ? <Loader />
        : error
          ? <Error error={error.message} />
          : data && (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">

              {/* Fotoğraf Alanı */}
              <div className="col-span-1 lg:col-span-2 grid grid-cols-2 gap-4 rounded-[48px] overflow-hidden h-fit">
                {data?.picture.map((url, i) => (<img key={i} src={url} className="w-full" />))}
              </div>

              {/* Bilgi ve işlem alanı */}
              <div className=" flex flex-col gap-8">
                <Head data={data} />
                <Color data={data.color} />
                <Size data={data.size} />

                <div className="">
                  <div className="flex gap-2 w-full">
                    <button className="text-white bg-dark rounded-lg w-full px-4 py-2 text-[14px] font-semibold">ADD TO CART</button>
                    <button className="text-white bg-dark rounded-lg">
                      <img src="/heart.svg" alt="hearticon" />
                    </button>
                  </div>
                  <button className="text-white bg-blue rounded-lg w-full mt-2 px-4 py-2 text-[14px] font-semibold">BUY IT NOW</button>
                </div>

                <div>
                  <h1 className="text-[16px] font-semibold mb-2">ABOUT THE PRODUCT</h1>

                  <p dangerouslySetInnerHTML={{ __html: data.description }}
                    className="text-[16px]"
                  ></p>



                </div>


              </div>
            </section>
          )}
    </div>
  )
}

export default Detail
