
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Absensi from './pages/Absensi'
import Kelas from './pages/Kelas'
import Home from './pages/Home'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={ <Home />} /> */}
        <Route path='/absensi' element={ <Absensi />} />
        <Route path='/' element={ <Kelas />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
