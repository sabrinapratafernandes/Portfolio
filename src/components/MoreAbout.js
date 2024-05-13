import More from "./More"
import Skils from "./Skils"

const MoreAbout = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white  bg-black w-screen md:h-screen pt-10 md:pt-0">
            <Skils/>
            <More/>
        </div>
    )
}

export default MoreAbout