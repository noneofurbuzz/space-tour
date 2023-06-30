export function Navbar(){
    return(
    <nav className="flex justify-between items-center mx-6 py-6 sm:py-0 lg:py-10 sm:mr-0 bg-none">
          <img src="images/shared/logo.svg" alt="logo" />
          <img className = "self-center sm:hidden" src="images/shared/icon-hamburger.svg" />
          <div className ="hidden lg:block border-b-0.5 w-1/3 left-36 xl:left-40 2xl:left-52 z-30 absolute border-white"></div>
          <ul className="lg:backdrop-blur-lg text-white shadow-lg font-barlow text-sm lg:text-base justify-around w-7/12 lg:px-32 py-10 bg-dark-gray-1 hidden sm:flex tracking-widest">
            <li className="mr-8"><span className="hidden mr-3 lg:inline font-bold">00</span>HOME</li>
            <li className="mr-8"><span className="hidden mr-3 lg:inline font-bold">01</span>DESTINATION</li>
            <li className="mr-8"><span className="hidden mr-3 lg:inline font-bold">02</span>CREW</li>
            <li className=""><span className="hidden mr-3 lg:inline font-bold">03</span>TECHNOLOGY</li>
          </ul>
</nav>
    )
}