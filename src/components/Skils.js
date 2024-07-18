import { fontStyle } from "../App"

const Skils = () => {
    return (
        <div className="flex flex-col items-center justify-center md:p-0 p-10">
            <h2 className="text-violet text-3xl pb-2">Resumo Profissional</h2>
            <div className="w-6/6 md:w-2/3">
            <li className="pb-2">Atualmente trabalho desenvolvendo alguns projetos como autônoma</li>
            <p className="pb-2">Durante minha jornada já trabalhei como auxiliar administrativo. Iniciei minha graduação em marketing e passei a estagiar em uma startup, onde tive meu maior desenvolvimento profissional, evolui para assistente, CS e então líder do time de implantação. Mediando relações entre clientes e o time de desenvolvimento, quando por fim decidi migrar de área, iniciando minha graduação em Eng. de Software.</p>
            
            <h2 className="text-violet text-3xl pt-2 pb-2">Habilidades</h2>
                <li>Conhecimento avançado em JavaScript e React</li>
                <li>Sólidos conhecimentos em negócio</li>
                <li>Formação em marketing</li>
                <li>Sou familiarizada com rotinas de trabalho em empresa de software</li>  
            </div>
        </div>
        
    )
}

export default Skils