import { BrowserRouter,Routes,Route } from "react-router-dom"
import Detail from "../pages/Detail"
import Home from "../pages/Home"


const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter