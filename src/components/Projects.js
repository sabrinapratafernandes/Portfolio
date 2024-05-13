import { fontStyle } from "../App"

const Projects = () => {
    return(
        <div className="flex flex-col items-center justify-center bg-black w-screen md:h-screen md:pt-0 pt-20">
            <h2 className="font-bold text-2xl pb-2 md:mt-20" style={fontStyle} >Alguns Dos meus Projetos:</h2>

            <div className="text-white flex flex-col items-center justify-center md:flex-row w-full text-sm md:flex-wrap">

            <div className="bg-principal p-2 m-1 rounded flex flex-col w-4/5 md:w-[350px] md:h-64">
                    <div className="text-base bg-violet p-4 rounded w-full mb-2 flex flex-col items-center justify-center">
                        <p className="font-bold">Finance Control</p>
                        <p>Em andamento</p>
                    </div>
                    <div>
                        <p className="m-1" >Desenvolvendo o front-end como Autonoma</p>
                        <p className="m-1">Tecnologias:
                        <li>HTML, TailwindCSS, PHP, Laravel</li>
                        </p>
                        
                        <p className="m-1">Outras atribuições:
                        <li>Criação: Diagrama relacional</li>  
                        <li>Criação: Diagrama de fluxo de dados</li>    
                        <li>Criação: Prototipo de alto nível</li>
                        </p>
                    </div>        
            </div>

                <div className="bg-principal p-2 m-1 rounded flex flex-col w-4/5 md:w-[350px] md:h-64">
                    <div className="text-base bg-violet p-4 rounded w-full mb-2 flex flex-col items-center justify-center">
                        <p className="font-bold">Integração com GitHub</p>
                        <p>Desenvolvimento Proprio</p>
                    </div>
                    <div className="">
                        <p className="m-1">Projeto desenvolvido para portfolio</p>
                        <p className="m-1">Tecnologias: 
                            <li>JavaScript, React, HTML, CSS / Flexbox</li>
                        </p>
                        <div className="flex flex-col items-center justify-center">
                            <a className="text-white bg-black w-4/5 p-2 rounded flex items-center justify-center m-1" href="">Ver repositório GitHub</a>
                            <a className="text-white bg-black w-4/5 p-2 rounded flex items-center justify-center m-1" href="" >Ver Online</a>
                        </div> 
                    </div>
                </div>

                <div className="bg-principal p-2 m-1 rounded flex flex-col w-4/5 md:w-[350px] md:h-64">
                    <div className="text-base bg-violet p-4 rounded w-full mb-2 flex flex-col items-center justify-center">
                        <p className="font-bold">Barbie Page</p>
                        <p>Desenvolvimento próprio</p>
                    </div>
                    <p className="m-1">Tecnologias:
                        <li>React.JS, TailwindCSS, Figma</li>
                    </p>
                    

                    <div className="flex flex-col items-center justify-center">
                            <a className="text-white bg-black w-4/5 p-2 rounded flex items-center justify-center m-1" href="">Ver repositório GitHub</a>
                            <a className="text-white bg-black w-4/5 p-2 rounded flex items-center justify-center m-1" href="" >Ver Online</a>
                    </div> 
                
                </div>

                 <div className="bg-principal p-2 m-1 rounded flex flex-col w-4/5 md:w-[350px] md:h-64">
                    <div className="text-base bg-violet p-4 rounded w-full mb-2 flex flex-col items-center justify-center">
                        <p className="font-bold">Sa Som</p>
                        <p>Projeto desenvolvido em curso</p>
                    </div>
                    <p className="m-1">Tecnologias:
                        <li>HTML, CSS, JavaScript</li>
                    </p>

                    <div className="flex flex-col items-center justify-center">
                            <a className="text-white bg-black w-4/5 p-2 rounded flex items-center justify-center m-1" href="">Ver repositório GitHub</a>
                            <a className="text-white bg-black w-4/5 p-2 rounded flex items-center justify-center m-1" href="" >Ver Online</a>
                    </div> 
                </div>

            </div>
            <h2 className="font-bold text-2xl m-6 mb-20" style={fontStyle}>Confira todos os meus projetos no Github</h2>

            
                
            
        </div>
    )
}

export default Projects