import { useEffect, useState } from "react"

export function Home(){
    const [text,setText] = useState("")
    const [bounce,setBounce] = useState(false)
    const [fullText,setFullText] = useState("SO, YOU WANT TO TRAVEL TO SPACE")
    const [index,setIndex] = useState(0)
    useEffect(() => {
        if (index < fullText.length){
            setTimeout(() => {
                setText(text + fullText[index])
                setIndex(index + 1)
                setBounce(true)
            },150)
        }
        
    },[index])

    return(
        <div className="bg-bg-mobile min-h-screen bg-no-repeat bg-cover ">
            <nav className="flex justify-between items-center mx-6 py-6 ">
                <img src="images/shared/logo.svg" alt="logo" />
                <img className = "self-center" src="images/shared/icon-hamburger.svg" />
            </nav>
            <section className="flex justify-center flex-col items-center mx-6 mt-6">
            <p className="font-barlow text-light-gray tracking-widest text-base">{text.slice(0,25)}</p>
            <p className="font-belle text-7xl text-white ">{text.slice(25,fullText.length)}</p>
            <p className=" bounce-in-left text-light-gray text-center font-reg text-base mt-2">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            <div className="parent mt-14 mb-4 flex items-center duration-700 invisible hover:visible active:visible justify-center bg-dark-gray rounded-full"><button className="bounce-in-left  visible button font-belle rounded-full duration-700 w-36 h-36 bg-white text-dark-black text-xl-1 tracking-wider">EXPLORE</button></div>
            </section>
        </div>
    )
}