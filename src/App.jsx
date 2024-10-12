import { Route, Routes, Navigate } from "react-router-dom"
import Dark from "./Dark"
import White from "./White"
import Darkq from "./Darkq"
import Darkw from "./Darkw"
import Whiteq from "./Whiteq"
import Whitew from "./Whitew"

function App() {

  return (
    <>
     <Routes>
       <Route path='/' element={<Navigate to='/d' />} />
       <Route path="/d" element={<Dark/>}/>
       <Route path="/w" element={<White/>}/>
       <Route path="/dq" element={<Darkq/>}/>
       <Route path="/wq" element={<Whiteq/>}/>
       <Route path="/dw" element={<Darkw/>}/>
       <Route path="/ww" element={<Whitew/>}/>
     </Routes>
    </>
  )
}

export default App
