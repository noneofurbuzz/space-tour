import { NavLink, useParams } from "react-router-dom"
import data from "/src/data.json"
export function Crew(){

    const {crew} = useParams()
    return(
        <div>
            {window.innerWidth < 1024 && <p className="font-barlow text-base text-white tracking-[0.16875em] text-center xs:text-left xs:mx-9 xs:mt-10 xs:text-xl xl:ml-[10.4rem] lg:text-[1.75rem] "><span className="text-gray font-bold mr-4">02</span>MEET YOUR CREW</p>}
            {data.crew.filter(prev => prev.name.includes(crew)).map((filteredCrew) => {
                return(
                    <div key={filteredCrew.name} className="flex flex-col lg:flex-row lg:items-center lg:justify-center xl:gap-40 lg:gap-0">
                        <img src={`${filteredCrew.images.png}`} alt="crew" className="w-[20.438rem] h-[13.9375rem] object-contain mx-auto border-b-[1px] border-b-[#383B4B] my-7 xs:order-last xs:w-[28.523125rem] xs:h-[35.75rem] xs:mb-0 xs:border-b-0 lg:mx-0 lg:my-0"/>
                        <div className="flex flex-col">
                            <nav className="w-[5.5rem] flex justify-between mx-auto lg:mt-20 lg:t-20 lg:mx-0 xs:order-last lg:w-[8.25rem]">
                                <NavLink to="/crew/Douglas" className={({isActive}) => ["hover:bg-gray w-2.5 h-2.5 duration-500 rounded-full lg:w-[0.9375rem] lg:h-[0.9375rem]",isActive ? "bg-white": "bg-white-1"].join(" ")}>&nbsp;</NavLink>
                                <NavLink to="/crew/Mark" className={({isActive}) => ["hover:bg-gray w-2.5 h-2.5 duration-500 rounded-full lg:w-[0.9375rem] lg:h-[0.9375rem]",isActive ? "bg-white": "bg-white-1"].join(" ")}>&nbsp;</NavLink>
                                <NavLink to="/crew/Victor" className={({isActive}) => ["hover:bg-gray w-2.5 h-2.5 duration-500 rounded-full lg:w-[0.9375rem] lg:h-[0.9375rem]",isActive ? "bg-white": "bg-white-1"].join(" ")}>&nbsp;</NavLink>
                                <NavLink to="/crew/Anousheh" className={({isActive}) => ["hover:bg-gray w-2.5 duration-500 h-2.5 rounded-full lg:w-[0.9375rem] lg:h-[0.9375rem]",isActive ? "bg-white": "bg-white-1"].join(" ")}>&nbsp;</NavLink>
                            </nav>
                            <div className="flex flex-col items-center mt-7 lg:items-start">
                                {window.innerWidth >= 1024 && <p className="font-barlow text-base text-white tracking-[0.16875em] text-center xs:text-left xs:mx-9 xs:mt-10 xs:text-xl lg:mx-0 lg:text-[1.75rem] lg:relative bottom-20"><span className="text-gray font-bold mr-4">02</span>MEET YOUR CREW</p>}
                                <p className="font-belle text-base uppercase text-gray xs:text-2xl xs:mt-6  lg:text-3xl">{filteredCrew.role}</p>
                                <p className="uppercase mt-2 xs:text-[2.5rem] text-white font-belle text-2xl xs:mt-4 lg:text-5xl wor">{filteredCrew.name}</p>
                                <p className="font-reg mx-4 mt-4 pb-10 text-center xs:text-base lg:text-left text-[#D0D6F9] text-[0.9375rem] xs:w-[32rem] xs:leading-7 lg:text-lg leading-6 lg:leading-8 xs:mt-6 lg:mx-0 ">{filteredCrew.bio}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}