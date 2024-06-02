/* eslint-disable no-unused-vars */

import axios from 'axios'
import TableKelas from '../components/TableKelas'
import MainLayout from '../layout/MainLayout'
import { useEffect, useState } from 'react'
import endpoint from '../config/endpoint'
import PopupFormSetIOT from '../fragments/PopupFormSetIOT'
import AddKelas from '../fragments/AddKelas'
import Loader from '../components/Loader'


const Kelas = () => {

    const [ data , setData ] = useState([])
    const [ loader , setLoader ] = useState(true)

    const [ popUpOpen , setPopUpOpen ] = useState(false)
    const [ httpReq , setHttpReq ] = useState('false')
    const [ addKelas , setAddKelas ] = useState(false)

    const [ iotModul , setIotModul ] = useState(0)
    const [ kelasIOTMode , setKelasIOTMode ] = useState('')

    const togglePopUp = ( e ) => {

        setPopUpOpen(!popUpOpen)
        setKelasIOTMode(e.target.id)
        console.log(e.target.id)
        
    }

    const toggleAddKelas = () => {

        setAddKelas(!addKelas)

    }
    
    const setIOT = () => {

        axios.post(endpoint+"app/iot/set",{
                kode_id: iotModul,
                mode: kelasIOTMode,
            })
            .then( () => {
                window.location.reload();
            })
            console.log(kelasIOTMode)
            console.log(iotModul)
            setPopUpOpen(!popUpOpen)
            setLoader(true)
    }
        
    const setIOTabsen = ( e ) => {
            console.log(e.target.id)
        axios.post(endpoint+"app/iot/set",{
                kode_id: e.target.id,
                mode: 'absen'
            })
            .then( () => {
                window.location.reload();        
            })
            setLoader(true)
    }   


    useEffect(() => {

        axios.get(endpoint+'app/kelas/all')
        .then( res => { 
            setData(res.data.data)
            setLoader(false)
        })

    }, [  ])
    

  return (
    <MainLayout>
            <div className='w-screen h-screen flex flex-col justify-center items-center'>
                <div className=' w-4/5 flex flex-col gap-6 '>

                    <p className=' text-3xl'>
                        Kelas List
                    </p>

                    <div className=' border px-12 py-6 rounded-t-3xl h-[40vh] shadow-inner ' >

                        <TableKelas setLoader={setLoader} setIOTabsen={setIOTabsen} togglePopUp={togglePopUp} data={data} />

                    </div>
                    {
                        loader ? ( <Loader /> ) : ('')
                    }

                    <div>
                        {
                            popUpOpen ? ( <PopupFormSetIOT setIotModul={setIotModul} setIOT={setIOT} togglePopUp={togglePopUp} /> ) : ''
                        }
                        {
                            addKelas ? ( <AddKelas setLoader={setLoader} toggleAddKelas={toggleAddKelas} /> ) : ''
                        }

                        <button onClick={toggleAddKelas} type="button" className=" focus:outline-none text-black bg-[#ff0] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 shadow-2xl">Tambah Kelas</button>                    </div>
                </div>
            </div>
    </MainLayout>
  )
}

export default Kelas
