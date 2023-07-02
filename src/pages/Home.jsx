import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export function Home(){
    const [text,setText] = useState("")
    const [fullText,setFullText] = useState("SO, YOU WANT TO TRAVEL TO SPACE")
    const [index,setIndex] = useState(0)
    useEffect(() => {
        if (index < fullText.length){
            setTimeout(() => {
                setText(text + fullText[index])
                setIndex(index + 1)
            },150)
        }
        
    },[index])

    return(
        <div className="">
            <section className="flex justify-around flex-col items-center mx-6 mt-6 xs:mt-24 lg:flex-row lg:mt-0 lg:pb-4 lg:justify-around xl:gap-80 xl:justify-center">
            <div className="flex flex-col justify-center items-center lg:justify-normal lg:items-start">
            <p className="font-barlow text-light-gray tracking-widest text-base xs:text-xl lg:text-3xl">{text.slice(0,25)}</p>
            <p className="font-belle text-7xl text-white xs:text-8xl">{text.slice(25,fullText.length)}</p>
            <p className=" bounce-in-left text-light-gray text-center font-reg lg:text-lg text-base pt-2 lg:text-left xs:w-100 lg:mx-0 lg:w-100 pb-20">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <Link to = "/destination/Moon" className="bounce-in-left flex items-center justify-center relative font-belle mb-12 xs:mt-32 xs:mb-16 rounded-full w-36 h-36 bg-white after:content-[''] after:bg-white-1 after:w-full after:h-full after:block after:absolute after:top-0 after:left-0 text-dark-black text-xl after:hover:scale-150 after:active:scale-150 after:duration-700 after:rounded-full tracking-wider lg:w-71 lg:h-71 xs:w-60 xs:h-60 xs:text-3xl"><span className="">EXPLORE</span></Link>
            </section>
        </div>
    )
}