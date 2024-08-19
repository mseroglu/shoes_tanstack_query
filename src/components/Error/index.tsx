interface Props {
  error: string
}

const Error = ({ error }: Props) => {
  return (
    <div className=" w-full col-span-full text-center p-10">
      <div className="bg-red-500 w-fit p-10 rounded-2xl mx-auto text-white grid gap-5">
        <p>Üzgünüm bir hata oluştu !!</p>
        <div>Error: {error}</div>
      </div>
    </div>
  )
}

export default Error
