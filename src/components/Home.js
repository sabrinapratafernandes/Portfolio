import Me from "./Me"
import Projects from "./Projects";
import Formation from "./Formation";
import MoreAbout from "./MoreAbout";


const Home = () => {
    return (
        <div className="absolute top-0">
            <Me/>
            <Projects/>
            <Formation/>
            <MoreAbout/>
        </div>
    )
}

export default Home