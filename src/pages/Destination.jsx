import { NavLink, useParams } from "react-router-dom"
import data from "/src/data.json"
export function Destination(){
    const {planet} = useParams()
    return(
        <div>
            <p className="font-barlow text-base text-white tracking-[0.16875em] text-center xs:text-left xs:mx-9 xs:mt-10 xs:text-xl xl:ml-[10.4rem] lg:text-[1.75rem] lg:ml-[]"><span className="text-gray font-bold mr-4">01</span>PICK YOUR DESTINATION</p>
            {data.destinations.filter(planets => planets.name == planet).map((filteredPlanet)=>{
                    return(
                        <div key={filteredPlanet.name} className="flex flex-col items-center lg:flex-row  lg:justify-evenly xl:justify-center xl:gap-40">
                            <img src={`${filteredPlanet.images.png}`} alt="planet-image" className="w-[10.63rem] h-[10.63rem] xl:w-[27.813rem] xl:h-[27.813rem] my-7 float xs:w-[18.75rem] xs:h-[18.75rem] xs:my-12"/>
                            <div>
                                <nav className="font-barlow text-sm w-[14.844rem] xs:w-[17.85rem] flex justify-between tracking-[0.16875em] mx-auto xs:text-base lg:mx-0">
                                    <NavLink to = "/destination/Moon" className={({isActive}) => ["duration-500 border-b-[3px] pb-1.5 hover:border-b-gray",isActive ? "text-white border-b-white" : "text-[#D0D6F9] border-b-transparent"].join(" ")} >MOON</NavLink>
                                    <NavLink to = "/destination/Mars" className={({isActive}) => ["duration-500 border-b-[3px] pb-1.5 hover:border-b-gray",isActive ? "text-white border-b-white" : "text-[#D0D6F9] border-b-transparent"].join(" ")}>MARS</NavLink>
                                    <NavLink to = "/destination/Europa" className={({isActive}) => ["duration-500 border-b-[3px] pb-1.5 hover:border-b-gray",isActive ? "text-white border-b-white" : "text-[#D0D6F9] border-b-transparent"].join(" ")}>EUROPA</NavLink>
                                    <NavLink to = "/destination/Titan" className={({isActive}) => ["duration-500 border-b-[3px] pb-1.5 hover:border-b-gray",isActive ? "text-white border-b-white" : "text-[#D0D6F9] border-b-transparent"].join(" ")}>TITAN</NavLink>
                                </nav>
                                <p className="font-belle text-center lg:text-left mt-3 text-white text-[3.5rem] uppercase xs:text-[5rem] lg:text-[6.25rem]">{filteredPlanet.name}</p>
                                <p className="text-[#D0D6F9] leading-6 lg:w-[27.75rem] xs:w-[34rem] font-reg text-center text-[0.94rem] mx-6 lg:mx-0 xs:text-base lg:text-lg lg:text-left">{filteredPlanet.description}</p>
                                <p className="border-b-[1px] mx-6 lg:mx-0 border-b-[#383B4B] my-8"></p>
                                <div className="flex flex-col xs:flex-row xs:justify-evenly lg:justify-normal lg:pb-20">
                                    <div className="uppercase flex flex-col items-center lg:items-start">
                                        <p className="font-barlow text-sm tracking-[0.16875em] text-[#D0D6F9] lg:mr-32">AVG. DISTANCE</p>
                                        <p className="text-white font-belle text-[1.75rem]">{filteredPlanet.distance}</p>
                                    </div>
                                    <div className="uppercase flex flex-col items-center pt-6 xs:pt-0 xs:pb-0 pb-10 lg:items-start">
                                        <p className="font-barlow text-sm tracking-[0.16875em] text-[#D0D6F9]">EST. TRAVEL TIME</p>
                                        <p className="text-white font-belle text-[1.75rem]">{filteredPlanet.travel}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            })}
        </div>
    )
}