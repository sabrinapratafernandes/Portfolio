import { fontStyle } from "../App"

const Projects = () => {
    return(
        <div className="flex flex-col items-center text-white">
            <h2 className="font-bold text-2xl pb-2" style={fontStyle} >Alguns Dos meus Projetos:</h2>

            <div className="flex">

            <div className="m-2 flex flex-col items-center">
                    <div className="bg-blue p-8 rounded ">
                        <p>Finance Control</p>
                        <p>Em andamento</p>
                    </div>
                    <p>Desenvolvendo o front-end como Autonoma</p>
                    <p>
                        Tecnologias:
                        HTML
                        TailwindCSS
                        PHP
                        Laravel
                    </p>
                    <p>Outras atribuições:
                        Criação do diagrama relacional
                        Criação do diagrama de fluxo de dados
                        Criação do prototipo de alto nível usando Figma
                    </p>
                </div>

                <div className="m-2 flex flex-col items-center">
                    <div className="bg-blue p-8 rounded ">
                        <p>Barbie Page</p>
                        <p>Desenvolvimento próprio</p>
                    </div>
                    <p>Tecnologias:
                        React.JS
                        TailwindCSS
                    </p>
                    <p>Quiz da Barbie</p>
                    <p>Fatos Curiosos</p>
                    <p>Sobre o Filme</p>
                    <p>Lista de Filmes</p>
                    <a href="https://github.com/sabrinapratafernandes/barbiepage">Ver repositório GitHub</a>
                    <a href="https://sabrinapratafernandes.github.io/barbiepage/" >Ver Online</a>
                </div>

                 <div className="m-2 flex flex-col items-center">
                    <div className="bg-blue p-8 rounded ">
                        <p>Sa Som</p>
                        <p>Projeto desenvolvido em curso</p>
                    </div>
                    <p>Tecnologias:
                        HTML
                        CSS 
                        JavaScript
                    </p>
                    <p>Quiz da Barbie</p>
                    <p>Fatos Curiosos</p>
                    <p>Sobre o Filme</p>
                    <p>Lista de Filmes</p>
                    <a href="https://github.com/sabrinapratafernandes/barbiepage">Ver repositório GitHub</a>
                    <a href="https://sabrinapratafernandes.github.io/barbiepage/" >Ver Online</a>
                </div>
            </div>

            <div className="flex items-center ">
                <h2 className="font-bold text-2xl m-6" style={fontStyle}>Confira todos os meus projetos no Github</h2>
                <div className="m-2 flex flex-col items-center">
                    <div className="bg-blue p-8 rounded ">
                        <p>Integração com GitHub</p>
                        <p>Desenvolvimento Proprio</p>
                    </div>
                    <p>
                    </p>
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>HTML</p>
                    <p>CSS / Flexbox</p>
                    <a href="https://github.com/sabrinapratafernandes/barbiepage">Ver repositório GitHub</a>
                    <a href="https://sabrinapratafernandes.github.io/barbiepage/" >Ver Online</a>
                </div>
            </div>
            
        </div>
    )
}

export default Projects