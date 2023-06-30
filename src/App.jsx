import { Routes, Route, useLocation} from "react-router-dom"
import { Home } from "./pages/Home"
import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import { Loader } from "./pages/Loader"
import { Navbar } from "./components/Navbar"
function App() {

  const navigate = useNavigate()
  const [path,setPath] = useState("")
  const location = useLocation()
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home")
    },5000);
    return () => clearTimeout(timer);
  })

useEffect(() => {
  if (location.pathname == "/home"){
    setPath("home")
  }
  else if (location.pathname == "/destination"){
    setPath("destination")
  }
  else if (location.pathname == "/crew"){
    setPath("crew")
  }
  else if (location.pathname == "/technology"){
    setPath("technology")
  }
},[location])

  return (
    <div>
    <div className={`${path} min-h-screen bg-no-repeat bg-cover bg-dark-gray`}>
    {location.pathname != "/" && <Navbar /> }
    <Routes>
    <Route path="/" element = {<Loader />} />
    <Route path="/home" element = {<Home />} />
    </Routes>
    </div>
    </div>
  )
}

export default App
