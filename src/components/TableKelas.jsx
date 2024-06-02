/* eslint-disable react/prop-types */

import axios from "axios"
import endpoint from "../config/endpoint"
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const TableKelas = ( { data , togglePopUp , setIOTabsen , setLoader } ) => {


    const kelasGetAll = (e) => {

        console.log(e.target.id)

        axios.get(endpoint+'app/kelas/get/'+e.target.id)
        .then( res => {

            createXLSXfile( e.target.id , res.data.data)
            // console.log(res.data.data)
        })
    }

    const createXLSXfile = ( fileName , data) => {
                // Membuat worksheet dari data
                const worksheet = XLSX.utils.json_to_sheet(data);
                // Membuat workbook dan menambahkan worksheet
                const workbook = {
                Sheets: { 'data': worksheet },
                SheetNames: ['data']
                };
                // Mengonversi workbook menjadi file Excel (format binary)
                const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
                // Membuat file Blob dari buffer
                const fileBlob = new Blob([excelBuffer], { type: 'application/octet-stream' });
                // Menyimpan file menggunakan file-saver
                saveAs(fileBlob, `${fileName}-data.xlsx`);
    }


    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        setLoader(true)
            reader.onload = (e) => {
                const binaryStr = e.target.result;
                const workbook = XLSX.read(binaryStr, { type: 'binary' });
            
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);
                
                console.log(jsonData);

                axios.post( endpoint+'app/murid/edit',{
                    data : jsonData
                })
                .then( res => {
                    console.log(res)
                    window.location.reload()
                })
            };
            reader.readAsBinaryString(file);

        };

        const deleteKelas = ( e ) => {
            console.log(endpoint+'app/kelas/delete/'+e.target.id)
            axios.delete( endpoint+'app/kelas/delete/'+e.target.id )
            .then( ( ) => {
                window.location.reload()
            })
            setLoader(true)
        }
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
                                <tr key={d.nama_kelas}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">{i+1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">{d.nama_kelas}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">{d.edit_by}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        {
                                            d.edit_by == '' ? (
                                        <button  type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-black disabled:opacity-50 disabled:pointer-events-none ">
                                            <svg onClick={togglePopUp} id={d.nama_kelas} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path id={d.nama_kelas} strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                            </svg>
                                        </button>
                                            ) : (
                                                <button  type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-black disabled:opacity-50 disabled:pointer-events-none ">
                                                    <svg onClick={setIOTabsen} id={d.edit_by} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path id={d.edit_by} strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                                    </svg>
                                                </button>
                                            )
                                        }
                                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-black disabled:opacity-50 disabled:pointer-events-none ">
                                            <svg onClick={kelasGetAll} id={d.nama_kelas} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path id={d.nama_kelas} strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                                            </svg>
                                        </button>
                                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-black disabled:opacity-50 disabled:pointer-events-none ">
                                            <label htmlFor={`${d.nama_kelas}-file`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                                                </svg>
                                            </label>
                                            <input onChange={handleFileUpload} id={`${d.nama_kelas}-file`} className="hidden" type="file" accept=".xlsx, .xls"  />
                                        </button>
                                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-black disabled:opacity-50 disabled:pointer-events-none ">
                                            <svg id={d._id} onClick={deleteKelas} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path id={d._id} strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
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
