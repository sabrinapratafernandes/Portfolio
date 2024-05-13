import { fontStyle } from "../App"
import { useState } from 'react';

const Formation = () => {

    const [isHidden, setIsHidden] = useState(true);

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };

    return (
        <div className="h-screen w-full bg-principal flex flex-col items-center justify-center text-white p-10  md:p-0 md:text-base text-sm">
            <div>
                <img/>
                <h2 className="font-bold text-2xl pb-2" style={fontStyle}>Formação</h2>
            </div>

            <p className="pb-2">Engenharia de Software: Uninter  2022 a 2026 - Em andamento</p>
            <p>Marketing, Uninter - Concluído</p>

            <div className="mt-8">
                <h2 className="font-bold text-2xl pb-2" style={fontStyle}>Cursos / Certificações</h2>
                <div className="flex" >
                    <div>
                    <li> React JS: Crie testes com Jest e Testing Library </li>
                    <li className="bg-violet p-1 rounded"> Formação - Aplicações Web com JavaScrip</li>

                    <div className={isHidden ? "hidden" : ""}>  
                        <li>JavaScript para Web: Crie páginas dinâmicas (Maio 2023)</li>
                        <li>JavaScript: manipulando o DOM (Maio 2023)</li>
                        <li>JavaScript: Validações e reconhecimento de voz (Agosto 2023)</li>
                        <li>JavaScript: Criando Requisições (Agosto 2023)</li>
                        <li>JavaScript na Web: armazenando dados no navegador (Agosto 2023)</li>
                        <li>JavaScript: Consumindo e tratando dados de uma API (Outubro 2023)</li>
                        <li>JavaScript: Métodos de Array (Dezembro 2023)</li>
                        <li>JavaScript: Validando Formulários (Janeiro 2024)</li>
                    </div>

                    <button onClick={toggleVisibility} className="text-blue">Ver cursos na formação</button>

                    <li>Tailwind CSS: estilizando a sua página com classes utilitárias (Alura - 03/2023)</li>
                    <li>HTML e CSS (Alura - 05/2023)</li>
                    <li>React: escrevendo com TypeScript (Alura - 05/2022)</li>
                    <li>Imersão Dev. (Alura - 03/2022)</li>
                    <li>GIT Completo: Do básico ao avançado. (Udemy - 10/2022)</li>                    
                    
                    </div>
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