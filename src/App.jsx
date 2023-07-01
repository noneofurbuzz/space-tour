import { Routes, Route, useLocation} from "react-router-dom"
import { Home } from "./pages/Home"
import { useEffect, useState} from "react"
import { Loader } from "./pages/Loader"
import { Destination } from "./pages/Destination"
import { Navbar } from "./components/Navbar"
function App() {

  
  const [path,setPath] = useState("")
  const location = useLocation()


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
    <div className={`${path} min-h-screen h-full bg-no-repeat bg-cover bg-dark-black`}>
    {location.pathname != "/" && <Navbar/> }
    <Routes>
    <Route path="/" element = {<Loader />} />
    <Route path="/home" element = {<Home />} />
    <Route path = "/destination" element = {<Destination />} />
    </Routes>
    </div>
    </div>
  )
}

export default App
