
import {Route, Routes} from "react-router-dom"
import Login from './pages/Login';
import Home from './pages/Home'
import Signup from "./pages/Signup";


const App = () => {

  return (
    <div>
      <Routes>
      {/*  REMINDER Do i need to put everything to home.jsx? */}
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div> 
  )
}

export default App

