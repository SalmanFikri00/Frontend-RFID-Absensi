/* eslint-disable react/prop-types */

const TableKelas = ( { data , togglePopUp , setIOTabsen } ) => {
  return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead>
                        <tr>
                            <th scope="col" className="px-6 py-3 text-start text-xl font-medium text-[#000] uppercase dark:text-[#000]">No</th>
                            <th scope="col" className="px-6 py-3 text-start text-xl font-medium text-[#000] uppercase dark:text-[#000]">Kelas</th>
                            <th scope="col" className="px-6 py-3 text-start text-xl font-medium text-[#000] uppercase dark:text-[#000]">Edit by</th>
                            <th scope="col" className="px-6 py-3 text-end text-xl font-medium text-[#000] uppercase dark:text-[#000]">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                        {
                            data.map((d,i) => (
                                <tr key={d.kelas}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">{i+1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">{d.kelas}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">{d.add_by}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        {
                                            d.add_by == '' ? (
                                        <button  type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-black disabled:opacity-50 disabled:pointer-events-none ">
                                            <svg onClick={togglePopUp} id={d.kelas} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path id={d.kelas} strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                            </svg>
                                        </button>
                                            ) : (
                                                <button  type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-black disabled:opacity-50 disabled:pointer-events-none ">
                                                    <svg onClick={setIOTabsen} id={d.add_by} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path id={d.add_by} strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                                    </svg>
                                                </button>
                                            )
                                        }
                                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-black disabled:opacity-50 disabled:pointer-events-none ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                                            </svg>
                                        </button>
                                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-black disabled:opacity-50 disabled:pointer-events-none ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ) )
                        }

                        
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
  )
}

export default TableKelas
