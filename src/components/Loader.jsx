import LoaderAnimation from "../fragments/LoaderAnimation"

const Loader = () => {
  return (
    <div className="fixed w-screen h-screen bg-[#00000054] top-0 left-0 flex justify-center items-center">
      <LoaderAnimation />
    </div>
  )
}

export default Loader
