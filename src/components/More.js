import { fontStyle } from "../App"

const More = () => {
    return (
        <div className="flex flex-col items-center justify-center md:p-0 p-10 pt-2">
            <h2 className="text-violet text-3xl pb-2">Sobre Mim</h2>
            <div className="w-6/6 md:w-2/3">
                <p className="">Além de desenvolvolver sou <strong>escritora</strong> e possuo um livro publicado <br></br> <a className="text-blue font-bold">(meu livro)</a>.</p>
                <p className="">Tenho um bom nível de <strong>inglês</strong>, podendo me comunicar sem grandes dificuldades e com um listening bem
                desenvolvido.</p>
                <p className="">Eu passei a estudar alemão em Janeiro de 2024 após ter o interesse desperto a partir da
                oportunidade que tive de viajar para Viena - Austria e ainda sou iniciante na língua.
                </p>

            </div>
        </div>
    )
}

export default More