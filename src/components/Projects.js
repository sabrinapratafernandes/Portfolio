import { fontStyle } from "../App"

const Projects = () => {
    return(
        <div className="flex flex-col items-center justify-center bg-black w-screen md:h-screen md:pt-0 pt-20">
            <h2 className=" text-3xl pb-2 md:mt-20 text-violet">Destaque Projetos:</h2>

            <div className="text-white flex flex-col items-center justify-center md:flex-row w-full text-sm md:flex-wrap">

            <div className="bg-principal p-2 m-1 rounded flex flex-col w-4/5 md:w-[350px] md:h-64">
                    <div className="text-base bg-violet p-4 rounded w-full mb-2 flex flex-col items-center justify-center">
                        <p className="font-bold">Finance Control</p>
                        <p>Freelancer - Em andamento</p>
                        <div className="flex">
                            <p className="font-bold bg-yellow rounded text-black text-xs p-1">HTML</p>
                            <p className="font-bold bg-strongpink rounded text-black text-xs p-1">TailwindCSS</p>
                            <p className="font-bold bg-yellow rounded text-black text-xs p-1">PHP</p>
                            <p className="font-bold bg-strongpink rounded text-black text-xs p-1">Laravel</p>
                        </div>
                    </div>
                    <div>
                        <p className="m-1" >Desenvolvendo o front-end como Autonoma</p>
                        
                        <p className="m-1">Outras atribuições:
                        <li>Criação: Diagrama relacional</li>  
                        <li>Criação: Diagrama de fluxo de dados</li>    
                        <li>Criação: Prototipo de alto nível</li>
                        </p>
                    </div>        
            </div>

            <div className="bg-principal p-2 m-1 rounded flex flex-col w-4/5 md:w-[350px] md:h-64">
                    <div className="text-base bg-violet p-4 rounded w-full mb-2 flex flex-col items-center justify-center">
                        <p className="font-bold">Barbie Page</p>
                        <p>Desenvolvimento próprio</p>
                        <div className="flex">
                            <p className="font-bold bg-yellow rounded text-black text-xs p-1">React.JS</p>
                            <p className="font-bold bg-strongpink rounded text-black text-xs p-1">TailwindCSS</p>
                            <p className="font-bold bg-yellow rounded text-black text-xs p-1">Figma</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                            <a className="text-white bg-black w-4/5 p-2 rounded flex items-center justify-center m-1" href="https://github.com/sabrinapratafernandes/barbiepage">Ver repositório GitHub</a>
                            <a className="text-white bg-black w-4/5 p-2 rounded flex items-center justify-center m-1" href="https://sabrinapratafernandes.github.io/barbiepage/" >Ver Online</a>
                    </div> 
            </div>

                <div className="bg-principal p-2 m-1 rounded flex flex-col w-4/5 md:w-[350px] md:h-64">
                    <div className="text-base bg-violet p-4 rounded w-full mb-2 flex flex-col items-center justify-center">
                        <p className="font-bold">Integração com GitHub</p>
                        <p>Desenvolvimento Proprio</p>
                        <div className="flex">
                            <p className="font-bold bg-yellow rounded text-black text-xs p-1">JavaScript</p>
                            <p className="font-bold bg-strongpink rounded text-black text-xs p-1">React</p>
                            <p className="font-bold bg-yellow rounded text-black text-xs p-1">HTML</p>
                            <p className="font-bold bg-strongpink rounded text-black text-xs p-1">CSS/Flexbox</p>
                        </div>
                    </div>
                    <div className="">
                        <p className="m-1">Projeto desenvolvido para portfolio</p>
                        <div className="flex flex-col items-center justify-center">
                            <a className="text-white bg-black w-4/5 p-2 rounded flex items-center justify-center m-1" href="">Ver repositório GitHub</a>
                            <a className="text-white bg-black w-4/5 p-2 rounded flex items-center justify-center m-1" href="" >Ver Online</a>
                        </div> 
                    </div>
                </div>

                <div className="bg-principal p-2 m-1 rounded flex flex-col w-4/5 md:w-[350px] md:h-64">
                    <div className="text-base bg-violet p-4 rounded w-full mb-2 flex flex-col items-center justify-center">
                        <p className="font-bold">Landing Page</p>
                        <p>Desafio de programação</p>
                        <div className="flex">
                            <p className="font-bold bg-yellow rounded text-black text-xs p-1">HTML</p>
                            <p className="font-bold bg-strongpink rounded text-black text-xs p-1">CSS / Flexbox</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                            <a className="text-white bg-black w-4/5 p-2 rounded flex items-center justify-center m-1" href="https://github.com/sabrinapratafernandes/Interior_consultant_devchallengs">Ver repositório GitHub</a>
                            <a className="text-white bg-black w-4/5 p-2 rounded flex items-center justify-center m-1" href="https://sabrinapratafernandes.github.io/Interior_consultant_devchallengs/" >Ver Online</a>
                    </div> 
                </div>

                <div className="bg-principal p-2 m-1 rounded flex flex-col w-4/5 md:w-[350px] md:h-64">
                    <div className="text-base bg-violet p-4 rounded w-full mb-2 flex flex-col items-center justify-center">
                        <p className="font-bold">Portfolio em JavaScrip</p>
                        <p>Trabalho da Faculdade</p>
                        <div className="flex">
                            <p className="font-bold bg-yellow rounded text-black text-xs p-1">HTML</p>
                            <p className="font-bold bg-strongpink rounded text-black text-xs p-1">CSS</p>
                            <p className="font-bold bg-yellow rounded text-black text-xs p-1">JavaScript</p>
                        </div>
                    </div>
                

                    <div className="flex flex-col items-center justify-center">
                            <a className="text-white bg-black w-4/5 p-2 rounded flex items-center justify-center m-1" href="https://github.com/sabrinapratafernandes/Aplicacao-Web-e-Moveis-Portfolio">Ver repositório GitHub</a>
                            <a className="text-white bg-black w-4/5 p-2 rounded flex items-center justify-center m-1" href="https://sabrinapratafernandes.github.io/Aplicacao-Web-e-Moveis-Portfolio/" >Ver Online</a>
                    </div> 
                </div>
            </div>  
            <h2 className="text-4xl m-6 text-violet">Confira todos os meus projetos!</h2>

            <a href="https://github.com/sabrinapratafernandes?tab=repositories" className="bg-black text-white border-2 p-2 rounded text-xl mb-10 hover:bg-white hover:text-black" >
                    Ver Projetos</a>          
        </div>
    )
}

export default Projects