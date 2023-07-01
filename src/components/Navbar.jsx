import {useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

export function Navbar(){
    const [show,setShow] = useState()
    function handleClick(){
        setShow(prevShow => !prevShow)
    }

    const location = useLocation()
    const [path,setPath] = useState("")
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
    return(
    <nav className="flex justify-between items-center mx-6 py-6 xs:py-0 lg:py-10 xs:mr-0 bg-none">
          <img src="images/shared/logo.svg" alt="logo" />
            {(show == true|| show == false)  && <div className={`${show == true ? "slide-in-right " : show == false ? "slide-in-right-out" : "" } xs:hidden bg-dark-gray-1 backdrop-blur-lg w-2/3 top-0 z-10 right-0 min-h-screen fixed`}>
          <img onClick = {handleClick} className = "self-center xs:hidden relative top-[33.95px] float-right right-6 cursor-pointer" src={`images/shared/icon-close.svg`}/>
          <ul onClick={() => setShow(false)} className="text-base font-barlow text-white mt-[118px] tracking-[0.16875em] ml-9">
            <Link to="/home" ><li className="mb-8"><span className="font-bold mr-3">00</span>HOME</li></Link>
            <Link to= "/destination" ><li className="mb-8"><span className="font-bold mr-3">01</span>DESTINATION</li></Link>
            <Link to="/crew" ><li className="mb-8"><span className="font-bold mr-3">02</span>CREW</li></Link>
            <Link to="/technology"><li className=""><span className="font-bold mr-3">03</span>TECHNOLOGY</li></Link>
          </ul>
          </div>}
          {<img onClick = {handleClick} className = "self-center xs:hidden cursor-pointer" src={`images/shared/icon-hamburger.svg`}/>}
          <div className ="hidden lg:block border-b-0.5 w-1/3 left-32 xl:left-40 2xl:left-52 z-30 absolute border-white"></div>
          <ul className="lg:backdrop-blur-lg xs:w-[28.125rem] sm:w-[30rem] md:w-[35rem] text-white shadow-lg font-barlow text-sm lg:text-base justify-evenly lg:w-7/12 lg:px-32 py-10 bg-dark-gray-1 hidden xs:flex tracking-[0.16875em] ">
            
            <Link to="/home" className="group mr-8 cursor-pointer"><span className="hidden mr-3 lg:inline font-bold">00</span>HOME<div className={`${path == "home" ? "border-white visible" : "border-transparent"} duration-500 border-b-4 group-hover:border-gray w-[2.1rem] top-[5.95rem] lg:w-[4.7rem] absolute lg:top-[6.2rem]`}></div></Link>
            
            <Link to="/destination" className="group mr-8 cursor-pointer"><span className="hidden mr-3 lg:inline font-bold">01</span>DESTINATION<div className={`${path == "destination" ? "border-white visible" : "border-transparent"} duration-500 border-b-4 group-hover:border-gray w-[5.3rem] lg:w-[8.1rem] top-[5.95rem] absolute lg:top-[6.2rem]`}></div></Link>
            
            <Link to="/crew" className="group mr-8 cursor-pointer"><span className="hidden mr-3 lg:inline font-bold">02</span>CREW<div className={`${path == "crew" ? "border-white visible" : "border-transparent"} border-b-4 group-hover:border-gray w-[2.1rem] lg:w-[4.6rem] duration-500 top-[5.95rem] absolute lg:top-[6.2rem]`}></div></Link>
            
            <Link to="technology" className="group cursor-pointer"><span className="hidden mr-3 lg:inline font-bold">03</span>TECHNOLOGY<div className={`${path == "technology" ? "border-white visible" : "border-transparent"} border-b-4 group-hover:border-gray duration-500 top-[5.95rem] w-[5.2rem] lg:w-[8.1rem] absolute lg:top-[6.2rem]`}></div></Link>
          </ul>
</nav>
    )
}