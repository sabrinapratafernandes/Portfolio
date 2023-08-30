import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="
        absolute top-0 left-0
        text-white
        flex justify-evenly w-full mt-2 font-semibold">
            <Link to="/">Home</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/formacao">Formação</Link>
            <Link to="/mais-sobre">Mais Sobre</Link>
      </div>
    )
}

export default NavBar