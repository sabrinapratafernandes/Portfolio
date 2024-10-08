import More from "./More"
import Skils from "./Skils"

const baseUrl = process.env.PUBLIC_URL ?? '';


const MoreAbout = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white  bg-black w-screen md:h-screen pt-10 md:pt-0">
            <div className="w-64 shadow-lg shadow-indigo-500/50 rounded-full mb-10">
                <img className="w-full" src={`${baseUrl}/assets/me-foto.png`}></img>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-start">
                <Skils/>
                <More/>
            </div>  
        </div>
    )
}

export default MoreAbout