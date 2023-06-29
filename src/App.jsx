import { Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home"
import { useEffect, useState } from "react"
import { Loader } from "./pages/Loader"
function App() {

  const [loading,setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    },4700);
    return () => clearTimeout(timer);
  },[])


  return (
    <>
    <Routes>
      <Route path="/" element = {loading ? <Loader /> : <Home />}/>
    </Routes>
    </>
  )
}

export default App
