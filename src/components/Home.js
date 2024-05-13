import Me from "./Me"
import Projects from "./Projects";
import Formation from "./Formation";
import MoreAbout from "./MoreAbout";

const Home = () => {
    return (
        <div className="flex flex-col items-center w-full ">
            <Me/>
            <Projects/>
            <Formation/>
            <MoreAbout/>
        </div>
    )
}

export default Home