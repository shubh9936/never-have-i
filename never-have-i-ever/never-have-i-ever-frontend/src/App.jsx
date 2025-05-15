import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import CreateRoom from "./pages/CreateRoom/CreateRoom"

function App() {
  return (
      <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createroom' element={<CreateRoom/>}/>
      </Routes>
      </>
  )
}

export default App 
