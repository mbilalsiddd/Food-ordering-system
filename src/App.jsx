import React from 'react'
import './App.css'
import './Managingstore.css'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Managingstore from './Components/Managingstore'
import {Routes, Route} from 'react-router-dom'
import Inventory from './Pages/Inventory.jsx'
import './Pages/Inventory.css'
import Profit from './Pages/Profit.jsx'
import './Components/Orderdetail.css'
import Orderdetail from './Components/Orderdetail.jsx'




function App() {
  

  return (
    <>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Managingstore' element={<Managingstore/>}/>
        <Route path='/Orderdetail' element={<Orderdetail/>}/>
        <Route path='/Inventory' element={<Inventory/>}/>
        <Route path='/Profit' element={<Profit/>}/>
    </Routes>
    
    </>
  )
}

export default App;
