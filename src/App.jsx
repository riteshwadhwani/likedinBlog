
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Feed from './pages/Feed'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className='bg-gray-100  h-fit min-h-screen '>
    <Navbar/>
    <div className='h-8'></div>
         <Routes>
             <Route path='/' element= {<Home/>} />
            <Route path='/linkedin-signin' element={<Login/>}/>
            <Route path='/linkedin-signup' element={<Signup/>} />
            <Route path='/feed/' element={<PrivateRoute><Feed/></PrivateRoute>} />
         </Routes>
    </div>
  )
}

export default App
