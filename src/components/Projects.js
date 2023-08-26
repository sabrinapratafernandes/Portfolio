import { fontStyle } from "../App"

const Projects = () => {
    return(
        <div>
            <h2 className="font-bold text-2xl pb-2" style={fontStyle} >Alguns Dos meus Projetos</h2>

            <div className="flex">
                <div>
                    <div className="bg-blue">PROJETO</div>
                    <ul>Detalhes</ul>
                    <ul>Detalhes</ul>
                    <ul>Detalhes</ul>
                </div>

                <div>
                    <div>PROJETO</div>
                    <ul>Detalhes</ul>
                    <ul>Detalhes</ul>
                    <ul>Detalhes</ul>
                </div>
            </div>

            <div>
                <h2 className="font-bold text-2xl pb-2" style={fontStyle}>Confira todos os meus projetos no Github</h2>
                <img></img>
            </div>
            
        </div>
    )
}

export default Projects