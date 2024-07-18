import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="
        p-2
        absolute top-0 left-0
        text-white
        flex justify-evenly w-full font-base">
            <Link to="/">Home</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/formacao">Formação</Link>
            <Link to="/mais-sobre">Sobre</Link>
      </div>
    )
}

export default NavBar