import { fontStyle } from "../App"
import iconsMeData from "../data/iconsMeData"

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
                        {iconsMeData.map((image, index) => (
                            <img
                            key={index}
                            className='w-8 md:w-10 h-auto m-2'
                            src={image.src}
                            alt={image.alt}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex">
                <button className="bg-black text-white border-2 p-2 rounded m-4 text-xl hover:bg-white hover:text-black" >
                    Baixar CV</button>
                    <button className="bg-black text-white border-2 p-2 rounded m-4 text-xl hover:bg-white hover:text-black" >
                    Contatar</button>
            </div>
                    
        </div>
    )
}

export default Me