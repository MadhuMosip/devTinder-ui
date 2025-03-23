import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Body from "./Components/Body"
import Login from "./Components/Login"

function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />} >
          <Route path='/login' element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
