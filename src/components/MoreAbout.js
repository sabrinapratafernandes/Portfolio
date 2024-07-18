import More from "./More"
import Skils from "./Skils"

const MoreAbout = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white  bg-black w-screen md:h-screen pt-10 md:pt-0">
            <div className="w-80 shadow-lg shadow-indigo-500/50 rounded-full mb-10">
                <img className="w-full" src="/assets/me-foto.png"></img>
            </div>
            <Skils/>
            <More/>
        </div>
    )
}

export default MoreAbout