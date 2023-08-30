import { fontStyle } from "../App"

const Formation = () => {
    return (
        <div className="flex flex-col items-start text-white m-10">
            <div>
                <img/>
                <h2 className="font-bold text-2xl pb-2" style={fontStyle}>Formação</h2>
            </div>

            <p className="pb-2">Engenharia de Software, Uninter  2022 a 2026 - Em andamento</p>
            <p>Marketing, Uninter - Concluído</p>

            <div className="mt-8">
                <h2 className="font-bold text-2xl pb-2" style={fontStyle}>Cursos / Certificações</h2>
                <div className="flex" >
                    <div>
                    <li> NOME DO CURSO </li>
                    <li> NOME DO CURSO </li>
                    <li> NOME DO CURSO </li>
                    <li> NOME DO CURSO </li>
                    </div>
                    <img className="w-20 m-4" src="/assets/courses.png" /> 
                </div>
            </div>

            <p>Confira estas e outras informações no meu
                <a className="text-blue"
                href="https://www.linkedin.com/in/sabrinabpf/"> Linkedin</a>
            </p>

        </div>
    )
};

export default Formation