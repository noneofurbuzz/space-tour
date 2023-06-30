import { useState } from "react"

export function Navbar(){
    const [show,setShow] = useState(false)
    function handleClick(){
        setShow(prevShow => !prevShow)
    }
    return(
    <nav className="flex justify-between items-center mx-6 py-6 xs:py-0 lg:py-10 xs:mr-0 bg-none">
          <img src="images/shared/logo.svg" alt="logo" />
          {<div className={`${show ? "slide-in-right" : "slide-in-right-out" } xs:hidden bg-dark-gray-1 backdrop-blur-lg w-2/3 top-0 z-10 right-0 min-h-screen fixed`}>
          <img onClick = {handleClick} className = "self-center xs:hidden relative top-[33.95px] float-right right-6 cursor-pointer" src={`images/shared/icon-close.svg`}/>
          <ul className="text-base font-barlow text-white mt-[118px] tracking-[0.16875em] ml-9">
            <li className="mb-8"><span className="font-bold mr-3">00</span>HOME</li>
            <li className="mb-8"><span className="font-bold mr-3">01</span>DESTINATION</li>
            <li className="mb-8"><span className="font-bold mr-3">02</span>CREW</li>
            <li className=""><span className="font-bold mr-3">03</span>TECHNOLOGY</li>
          </ul>
          </div>}
          {<img onClick = {handleClick} className = "self-center xs:hidden cursor-pointer" src={`images/shared/icon-hamburger.svg`}/>}
          <div className ="hidden lg:block border-b-0.5 w-1/3 left-32 xl:left-40 2xl:left-52 z-30 absolute border-white"></div>
          <ul className="lg:backdrop-blur-lg xs:w-[28.125rem] sm:w-[30rem] md:w-[35rem] text-white shadow-lg font-barlow text-sm lg:text-base justify-evenly lg:w-7/12 lg:px-32 py-10 bg-dark-gray-1 hidden xs:flex tracking-[0.16875em] ">
            <li className="mr-8"><span className="hidden mr-3 lg:inline font-bold">00</span>HOME</li>
            <li className="mr-8"><span className="hidden mr-3 lg:inline font-bold">01</span>DESTINATION</li>
            <li className="mr-8"><span className="hidden mr-3 lg:inline font-bold">02</span>CREW</li>
            <li className=""><span className="hidden mr-3 lg:inline font-bold">03</span>TECHNOLOGY</li>
          </ul>
</nav>
    )
}