import { fontStyle } from "../App"

const Home = () => {
    return (
        <div className="text-base md:w-2/3">
            <div className="flex justify-evenly items-center mb-10">
                <img className='w-40 h-40 rounded-full shadow-md shadow-pink'
                src='/assets/foto.jpg' alt="foto" />
                <button className="bg-pink text-darkBlue p-2 rounded m-4 text-lg" >
                    Baixar CV</button>
            </div>

            <div className="
                        text-fonts-white 
                        m-2">
                <div className="flex p-2">
                    <p className="pr-2 self-end">Oi, eu sou a Sabrina;</p>
                    <img className='w-8 h-8'
                        src="/assets/js.png" alt="icone javascript"/>
                    <img className='w-8 h-8'
                        src="/assets/react.png" alt="icone react"/>
                    <img className='w-8 h-8'
                         src="/assets/html5.png" alt="icone html"/>
                    <img className='w-8 h-8'
                         src="/assets/css3.png"/>
                </div>
                <h1 className="font-bold text-4xl pb-2" style={fontStyle} >
                    Frontend Developer
                </h1>
                <p className="text-base pl-10">Tenho 23 anos e 1 ano de experiencia em desenvolvimento de projetos para estudo! Curso Engenharia de Software e sou formada em Marketing, tenho inglês avançado e sou apaixonada por resolver problemas de forma criativa.</p>
            </div>
        </div>
    )
}

export default Home