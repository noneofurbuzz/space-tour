import { useEffect, useState } from "react"


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
            <section className="flex justify-around flex-col items-center mx-6 mt-6 sm:mt-24 lg:flex-row lg:mt-0 lg:pb-4">
            <div className="flex flex-col justify-center items-center lg:justify-normal lg:items-start">
            <p className="font-barlow text-light-gray tracking-widest text-base sm:text-xl lg:text-3xl">{text.slice(0,25)}</p>
            <p className="font-belle text-7xl text-white sm:text-8xl">{text.slice(25,fullText.length)}</p>
            <p className=" bounce-in-left text-light-gray text-center font-reg lg:text-lg text-base mt-2 lg:text-left sm:mx-36 lg:mx-0 lg:w-100">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="bounce-in-left parent mt-20 mb-12 sm:mt-32 sm:mb-16 flex items-center duration-700 invisible hover:visible active:visible justify-center bg-dark-gray rounded-full"><button className="bounce-in-left visible button font-belle rounded-full duration-700 w-36 h-36 bg-white text-dark-black text-xl tracking-wider lg:w-71 lg:h-71 sm:w-60 sm:h-60 sm:text-3xl">EXPLORE</button></div>
            </section>
        </div>
    )
}