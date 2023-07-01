import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Loader(){
    const navigate = useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => {
          navigate("/home")
        },5000);
        return () => clearTimeout(timer);
      })
    return(
        <div className="bg-black min-h-screen flex flex-col justify-center items-center bg-stars">
            <div className="tracking-out-contract">
            <p className="tracking-in-expand text-white font-belle text-3xl md:text-4xl tracking-widest ">SPACE TOUR</p>
            </div>
        </div>
    )
}