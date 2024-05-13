import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="
        bg-violet
        p-2
        absolute top-0 left-0
        text-white
        flex justify-evenly w-full font-semibold">
            <Link to="/">Home</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/formacao">Formação</Link>
            <Link to="/mais-sobre">Mais Sobre</Link>
      </div>
    )
}

export default NavBar