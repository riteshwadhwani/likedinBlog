
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Navbar from './components/common/Navbar'

function App() {
  return (
    <div className='bg-gray-100 w-screen h-screen'>
    <Navbar/>
    <div className='h-8'></div>
         <Routes>
           
            <Route path='/linkedin-login' element={<Login/>}/>
            <Route path='/linkedin-signup' element={<Signup/>} />
            <Route path='/feed/' element={<Home/>} />
         </Routes>
    </div>
  )
}

export default App
