import { useState } from "react"


const TableAbsensi = ( { data } ) => {




  return (
    <div className="flex flex-col">
    <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
            <thead>
                <tr>
                    <th scope="col" className="px-6 py-3 text-start text-xl font-medium text-[#000] uppercase dark:text-[#000]">No</th>
                    <th scope="col" className="px-6 py-3 text-start text-xl font-medium text-[#000] uppercase dark:text-[#000]">Nama</th>
                    <th scope="col" className="px-6 py-3 text-start text-xl font-medium text-[#000] uppercase dark:text-[#000]">Kelas</th>
                    <th scope="col" className="px-6 py-3 text-start text-xl font-medium text-[#000] uppercase dark:text-[#000]">keterangan by</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {
                    data.map( (d , i) => (

                                <tr key={i}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">{i+1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">{d.nama}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">{d.kelas}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">{d.keterangan}</td>
                                </tr>
                    ))
                }
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
  )
}

export default TableAbsensi
