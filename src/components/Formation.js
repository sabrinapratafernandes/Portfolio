import { fontStyle } from "../App"
import { useState } from 'react';
import AllFormationData from "../data/AllFormationData";
import formationData from "../data/coursesData";

const Formation = () => {

    const [isHidden, setIsHidden] = useState(true);

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };

    return (
        <div className="h-screen w-full bg-principal flex flex-col items-center justify-center text-white p-10  md:p-0 md:text-base text-base">
         <div className="flex flex-col md:flex-row justify-center md:items-start">
         <div className="md:m-2">
         <h2 className="text-white text-3xl pb-2">Formação</h2>
            
        <div className="bg-black p-4 rounded">
            <p>Engenharia de Software: Uninter  2022 a 2026 - Em andamento</p>
            <p>Marketing, Uninter - Concluído</p>
        </div>
        </div>

            <div className="md:m-2">
                <h2 className="text-white text-3xl pb-2">Cursos / Certificações</h2>
                <div className="flex bg-black p-4 rounded" >
                    <div>
                    <li> React JS: Crie testes com Jest e Testing Library </li>
                    <li className="bg-violet p-1 rounded"> Formação - Aplicações Web com JavaScrip</li>

                    <div className={isHidden ? "hidden" : ""}>  
                    
                        {AllFormationData.map((info, index) => (
                            <li>{info.course}</li>
                        ))}

                    </div>

                    <button onClick={toggleVisibility} className="text-blue">Ver cursos na formação</button>

                        {formationData.map((info, index) => (
                            <li>{info.certificate}</li> 
                        ))}
            

                    </div>
                </div>
            </div>
            </div>
            <p className="mt-4 text-lg">Confira estas e outras informações no meu
                <a className="text-blue"
                href="https://www.linkedin.com/in/sabrinabpf/"> Linkedin</a>
            </p>
            
        </div>
    )
};

export default Formation