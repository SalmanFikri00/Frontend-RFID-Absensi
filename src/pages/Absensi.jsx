import { useEffect, useRef ,useState } from 'react';
import TableAbsensi from "../components/TableAbsensi";
import MainLayout from "../layout/MainLayout";
import axios from 'axios';
import endpoint from '../config/endpoint';

const Absensi = () => {
  const dateInputRef = useRef(null);

  const [ data , setData ] = useState([])


  const handleGetData = e => {
    console.log(e.target.value);
    axios.get( endpoint+'app/absensi/tanggal/'+e.target.value)
    .then( res => {
      setData(res.data.data)
      console.log(res.data.data)
    } )
  };

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (dateInputRef.current) {
      dateInputRef.current.value = today;
    }
console.log(today)
    axios.get( endpoint+'app/absensi/tanggal/'+today)
    .then( res => {
      setData(res.data.data)
      console.log(res.data.data)
    } )

  }, []);

  return (
    <MainLayout>
      <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <div className='w-4/5 flex flex-col gap-6'>
          <div>
            <p className='text-3xl'>
              Absensi List
            </p>
            <input type="date" ref={dateInputRef} onChange={handleGetData} />
          </div>
          <div className='border px-12 py-6 rounded-t-3xl h-[40vh] shadow-inner'>
            <TableAbsensi data={data} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Absensi;
