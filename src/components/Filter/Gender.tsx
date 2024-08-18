import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"


const Gender = ({selected, setSelected}:PropsSelected) => {
  const [params, setParams] = useSearchParams()

  const toggle = (gender: string) => {
    const found = selected.find(i => i === gender)
    if (found) {
      setSelected(selected.filter(i => i !== gender))
    } else {
      setSelected([...selected, gender])
    }
  }

  useEffect(() => {
    if (selected.length > 0) {
      params.set("gender", selected.join(","))
    } else {
      params.delete("gender")
    }
    setParams(params)
  }, [selected])

  return (
    <div>
      <h1 className="font-semibold mb-4">Gender </h1>
      <div className="flex gap-4">
        <input
          checked={selected.includes("men")}
          type="checkbox" id="men" onChange={() => toggle("men")} />
        <label htmlFor="men" className="font-semibold select-none">Men</label>
      </div>
      <div className="flex gap-4">
        <input
          checked={selected.includes("women")}
          type="checkbox" id="women" onChange={() => toggle("women")} />
        <label htmlFor="women" className="font-semibold select-none">Women</label>
      </div>

    </div>
  )
}

export default Gender
