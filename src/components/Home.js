import Me from "./Me"
import Projects from "./Projects";
import Formation from "./Formation";
import MoreAbout from "./MoreAbout";
import Jobs from "./Jobs";


const Home = () => {
    return (
        <div className="absolute top-0">
            <Me/>
            <Jobs/>
            <Projects/>
            <Formation/>
            <MoreAbout/>
        </div>
    )
}

export default Home