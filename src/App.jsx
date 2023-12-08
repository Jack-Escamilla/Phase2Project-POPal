import { useState } from 'react'
import './App.css'
import PurchaseContainer from './assets/components/PurchaseContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import DetailsPage from './assets/components/DetailsPage'
import Login from './assets/components/Login'

function App() {

  
  return (
   <>
      <div>
           <div>
            <h1 className="title">P.O. Pal</h1>
          </div>
          
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/details/:id" element={<DetailsPage/>}/>
        <Route path="/home" element = {<PurchaseContainer/>}/>
      </Routes>
    </BrowserRouter>
    
        {/* <PurchaseContainer/> */}
       </div>
    </>
   )
}

export default App
