import { fontStyle } from "../App"

const Me = () => {
    return (
        <div className="flex flex-col justify-center items-center text-base h-screen">

                <div className="flex flex-col justify-center items-center text-base">
                

                <div className="text-fonts-white p-5">
                    <p className="pr-2 self-end text-xl md:text-4xl">Sabrina Fernandes</p>
                
                    <h1 className="font-bold text-6xl md:text-8xl w-full" style={fontStyle} >
                    Frontend Developer
                    </h1>
                    <div className="flex justify-center items-center
                    p-2 mt-10">
                        <img className='w-8 md:w-10 h-auto'
                            src="/assets/js.png" alt="icone javascript"/>
                        <img className='w-8 md:w-10 h-auto'
                            src="/assets/react.png" alt="icone react"/>
                        <img className='w-8 md:w-10 h-auto'
                            src="/assets/html5.png" alt="icone html"/>
                        <img className='w-8 md:w-10 h-auto'
                            src="/assets/css3.png"/>
                        <img className='w-8 md:w-10 h-auto'
                        src="/assets/typescript100.png"/>
                        <img className='w-8 md:w-10 h-auto'
                        src="/assets/tailwind-css.svg"/>
                        <img className='w-8 md:w-10 h-auto'
                        src="/assets/git.svg"/>
                        <img className='w-8 md:w-10 h-auto'
                        src="/assets/github.svg"/>
                        <img className='w-8 md:w-10 h-auto'
                        src="/assets/figma.png"/>
                        <img className='w-8 md:w-10 h-auto'
                        src="/assets/php.png"/>
                    </div>
                </div>
            </div>

            <div className="flex">
                <button className="bg-black text-white border-2 p-2 rounded m-4 text-xl" >
                    Baixar CV</button>
                    <button className="bg-black text-white border-2 p-2 rounded m-4 text-xl" >
                    Contatar</button>
            </div>
                    
        </div>
    )
}

export default Me