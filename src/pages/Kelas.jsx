/* eslint-disable no-unused-vars */

import axios from 'axios'
import TableKelas from '../components/TableKelas'
import MainLayout from '../layout/MainLayout'
import { useState } from 'react'
import endpoint from '../config/endpoint'
import PopupFormSetIOT from '../fragments/PopupFormSetIOT'


const Kelas = () => {

    const [ data , setData ] = useState([
        {
            kelas : 'XI Sija 1',
            add_by: '1',
        },
        {
            kelas : 'XI Sija 2',
            add_by: '',
        },
        {
            kelas : 'X Sija 1',
            add_by: '',
        },
    ])

    const [ popUpOpen , setPopUpOpen ] = useState(false)

    const [ iotModul , setIotModul ] = useState(0)
    const [ kelasIOTMode , setKelasIOTMode ] = useState('')

    const togglePopUp = ( e ) => {

        setPopUpOpen(!popUpOpen)
        setKelasIOTMode(e.target.id)
        console.log(e.target.id)
        
    }
    
    const setIOT = () => {

        // axios.post(endpoint+"/app/iot/set",{
            //     kode_id: iotModul,
            //     mode: kelasIOTMode,
            // })
            
            console.log(kelasIOTMode)
            console.log(iotModul)
            setPopUpOpen(!popUpOpen)
            
        }
        
        const setIOTabsen = ( e ) => {
            console.log(e.target.id)
        // axios.post(endpoint+"/app/iot/set",{
            //     kode_id: e.target.id,
            //     mode: 'absen,
            // })
        
    }

  return (
    <MainLayout>
            <div className='w-screen h-screen flex flex-col justify-center items-center'>
                <div className=' w-4/5 flex flex-col gap-6 '>

                    <p className=' text-3xl'>
                        Kelas List
                    </p>

                    <div className=' border px-12 py-6 rounded-t-3xl h-[40vh] shadow-inner ' >

                        <TableKelas setIOTabsen={setIOTabsen} togglePopUp={togglePopUp} data={data} />

                    </div>

                    <div>
                        {
                            popUpOpen ? ( <PopupFormSetIOT setIotModul={setIotModul} setIOT={setIOT} togglePopUp={togglePopUp} /> ) : ''
                        }
                        
                        <button type="button" className=" focus:outline-none text-black bg-[#ff0] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 shadow-2xl">Tambah Kelas</button>                    </div>
                </div>
            </div>
    </MainLayout>
  )
}

export default Kelas
