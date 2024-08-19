import { useQuery } from "@tanstack/react-query"
import api from "../../utils/api"
import Loader from "../../components/Loader"
import Error from "../../components/Error"
import Card from "../../components/Card"
import { useSearchParams } from "react-router-dom"
import formatParams from "../../utils/formatParams"


const List = () => {
  const [params, setParams] = useSearchParams()
  const paramObj = Object.fromEntries(params.entries())

  const stringParams = formatParams(paramObj) || null
  const url = stringParams ? "/shoes?" + stringParams : "/shoes"

  const { isLoading, error, data } = useQuery<Shoe[]>({
    queryKey: ["shoes", stringParams],
    queryFn: () =>
      api.get(url)
        .then((res) => res.data)
  })

  //console.log(data)
  return (
    <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 lg:gap-y-8 relative">
      {/**
    <div className="col-span-4 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 lg:gap-y-8 ">
       */}
      {
        isLoading
          ? <Loader />
          : error
            ? <Error error={error.message} />
            : (
              data && data.length > 0
                ? data?.map(item => <Card key={item.id} data={item} />)
                : (
                  <p className="text-center mt-20 col-span-full">
                    Aradığınız kriterlere uygun ürün bulunamadı
                  </p>
                )
            )
      }
    </div>
  )
}

export default List
