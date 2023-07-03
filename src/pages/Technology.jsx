import { useParams,NavLink } from "react-router-dom"
import data from "/src/data.json"
export function Technology(){
    const {technology} = useParams()
    
    return(
        <div>
            {window.innerWidth < 1024 && <p className="font-barlow text-base text-white tracking-[0.16875em] text-center xs:text-left xs:mx-9 xs:mt-10 xs:text-xl lg:ml-[10.4rem] lg:text-[1.75rem]"><span className="text-gray font-bold mr-4">03</span>SPACE LAUNCH 101</p>}
            {data.technology.filter(tech => tech.name == technology).map((filteredTech) => {
                return(
                    <div key={filteredTech.name} className="flex flex-col lg:flex-row lg:justify-center">
                         <div className="lg:order-last">
                            <img src={`${window.innerWidth < 1024 ? filteredTech.images.landscape : filteredTech.images.portrait}`} className="lg:mt-20 w-full  max-w-full object-contain my-7 xs:my-12 lg:w-[32.2rem] lg:h-[32.95rem]"/>
                        </div>
                        <div className="lg:mt-20 lg:mx-20">
                        {window.innerWidth >= 1024 && <p className="font-barlow text-base text-white tracking-[0.16875em] text-center xs:text-left xs:mx-9 xs:mt-10 xs:text-xl lg:mx-0 lg:text-[1.75rem] lg:relative lg:bottom-20"><span className="text-gray font-bold mr-4">03</span>SPACE LAUNCH 101</p>}
                        <div className="flex flex-col items-center lg:flex-row ">
                            <nav className="flex w-[9.5rem] xs:w-[13.125rem] justify-between mx-auto lg:flex-col lg:-mr-16">
                                <NavLink to="/technology/Launch vehicle" className={({isActive}) => ["border-2 w-10 hover:border-white h-10 lg:mb-6 xs:w-[3.75rem] xs:h-[3.75rem] font-belle justify-center flex items-center  lg:w-[5rem] lg:h-[5rem] border-white-1 duration-500 rounded-full",isActive ? "text-[#0B0D17] bg-white": "text-white bg-transparent"].join(" ")}><span className="xs:text-2xl text-base lg:text-3xl">1</span></NavLink>
                                <NavLink to="/technology/Spaceport" className={({isActive}) => ["w-10 h-10 border-2 duration-500 hover:border-white lg:mb-6 justify-center flex items-center  font-belle text-base border-white-1 xs:w-[3.75rem] xs:text-2xl lg:text-3xl lg:w-[5rem] lg:h-[5rem] xs:h-[3.75rem] rounded-full",isActive ? "text-[#0B0D17] bg-white": "text-white bg-transparent"].join(" ")}><span>2</span></NavLink>
                                <NavLink to="/technology/Space capsule" className={({isActive}) => ["w-10 h-10 border-2 duration-500 justify-center xs:w-[3.75rem] xs:h-[3.75rem] flex items-center hover:border-white font-belle text-base xs:text-2xl lg:text-3xl lg:w-[5rem] lg:h-[5rem] border-white-1 rounded-full",isActive ? "text-[#0B0D17] bg-white": "text-white bg-transparent"].join(" ")}><span className="">3</span></NavLink>
                            </nav>
                            <div className="flex flex-col items-center xs:mt-4 lg:items-start">
                                <p className="font-barlow text-[#D0D6F9] text-sm xs:text-base xs:tracking-[0.16875rem] tracking-[0.1475rem] mt-8">THE TERMINOLOGY...</p>
                                <p className="uppercase xs:text-[2.5rem] lg:text-[3.5rem] mt-4 mb-6 text-2xl font-belle text-white lg:mb-8 lg:mt-6 lg:leading-none">{filteredTech.name}</p>
                                <p className="text-[#D0D6F9] mx-4 xs:w-[27.5rem] xs:leading-7 pb-10 font-reg leading-6 text-[0.9375rem] text-center xs:text-base lg:text-lg lg:leading-8 lg:mx-0 lg:text-left lg:w-[27.75rem]">{filteredTech.description}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                )
            })}
          
        </div>
    )
}