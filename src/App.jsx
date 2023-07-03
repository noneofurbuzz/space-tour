import { Routes, Route, useLocation} from "react-router-dom"
import { Home } from "./pages/Home"
import { useEffect, useState} from "react"
import { Loader } from "./pages/Loader"
import { Destination } from "./pages/Destination"
import { Navbar } from "./components/Navbar"
import { Crew } from "./pages/Crew"
import { Technology } from "./pages/Technology"
function App() {

  
  const [path,setPath] = useState("")
  const location = useLocation()


useEffect(() => {
  if (location.pathname == "/home"){
    setPath("home")
  }
  else if ((location.pathname.includes("/destination"))){
    setPath("destination")
  }
  else if (location.pathname.includes("/crew")){
    setPath("crew")
  }
  else if (location.pathname.includes("/technology")){
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
    <Route path = "/destination" element = {<Destination />}>
      <Route path=":planet" element = {<Destination />} />
    </Route>
    <Route path="/crew" element = {<Crew />} >
      <Route path=":crew" element = {<Crew />} />
    </Route>
    <Route path="/technology" element = {<Technology />} >
      <Route path=":technology" element = {<Technology />} />
    </Route>
    </Routes>
    </div>
    </div>
  )
}

export default App
