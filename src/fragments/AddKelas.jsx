import axios from "axios"
import endpoint from "../config/endpoint"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
const AddKelas = ( { toggleAddKelas , setLoader} ) => {


  const [ namaKelas , setNamaKelas ] = useState('')

  const addKelas = ( e ) => {

    e.preventDefault()

    axios.post(endpoint+'app/kelas/add',{
      nama_kelas: namaKelas
    })
    .then( () => {
      window.location.reload()
    })

    setLoader(true)
  }

  return (
<div

        aria-hidden="true"
        className="bg-[#00000028] overflow-y-auto overflow-x-hidden fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-screen md:inset-0 h-screen max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Tambahkan Kelas baru
              </h3>
              <button
                onClick={toggleAddKelas}
                id=""
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"

              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5">
              <form className="space-y-4" action="#">
                <div>
                  <label htmlFor="kode_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    masukan nama kelas
                  </label>
                  <input
                  onChange={ e => {
                    console.log(e.target.value)
                    setNamaKelas(e.target.value)
                  }}
                    id="kode_id"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="XI Sija 1"
                    required
                  />
                </div>
                <button
                    onClick={addKelas}
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  set it
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AddKelas
