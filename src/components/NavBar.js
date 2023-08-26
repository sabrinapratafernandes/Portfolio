import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="
        absolute top-0 left-0
        text-white
        flex justify-evenly w-full mt-2 font-semibold">
            <Link to="/pagina-inicial">Home</Link>
            <Link to="/projetos">Projetos</Link>
            <a>Formação</a>
            <a>Mais Sobre</a>
      </div>
    )
}

export default NavBar