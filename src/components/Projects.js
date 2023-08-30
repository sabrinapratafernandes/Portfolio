import { fontStyle } from "../App"

const Projects = () => {
    return(
        <div className="flex flex-col items-center text-white">
            <h2 className="font-bold text-2xl pb-2" style={fontStyle} >Alguns Dos meus Projetos:</h2>

            <div className="flex">
                <div className="m-2 flex flex-col items-center">
                    <div className="bg-blue p-8 rounded ">PROJETO</div>
                    <li>Detalhes</li>
                    <li>Detalhes</li>
                    <li>Detalhes</li>
                </div>

                <div className="m-2 flex flex-col items-center">
                    <div className="bg-blue p-8 rounded ">PROJETO</div>
                    <li>Detalhes</li>
                    <li>Detalhes</li>
                    <li>Detalhes</li>
                </div>
            </div>

            <div className="flex items-center ">
                <h2 className="font-bold text-2xl m-6" style={fontStyle}>Confira todos os meus projetos no Github</h2>
                <img></img>
            </div>
            
        </div>
    )
}

export default Projects