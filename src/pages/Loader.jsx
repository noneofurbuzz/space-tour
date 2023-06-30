
export function Loader(){
    return(
        <div className="bg-black min-h-screen flex flex-col justify-center items-center bg-stars">
            <img  className = "h-20 absolute animate-move animate-move-1 max-w-full w-20" src="/images/spaceship.svg" 
            alt="spaceship" />
            <div className="tracking-out-contract">
            <p className="mt-32 tracking-in-expand text-white font-belle text-2xl tracking-widest md:text-2xl">SPACE TOUR</p>
            </div>
        </div>
    )
}