import { fontStyle } from "../App"

const More = () => {
    return (
        <div className="flex flex-col items-center justify-center md:p-0 p-10">
            <h2 className="font-bold text-2xl pb-2" style={fontStyle}>Sobre Mim</h2>
            <div className="w-6/6 md:w-2/3">
                <p>Curitibana, casada, sem filhos, 23 anos</p>
                <p>Além de desenvolvolver sou escritora, possuo um livro publicado de poesia, meus hobbies envolvem
                arte, como pintura e escrita. Acredito que a tecnologia é uma forma de arte, pois nos permite criar e
                desenvolver é minha paixão.
                Eu passei a estudar alemão em Janeiro de 2024 após ter o interesse desperto a partir da
                oportunidade que tive de viajar para Viena - Austria e ainda sou iniciante na língua. Tenho um bom
                nível de inglês, podendo me comunicar sem grandes dificuldades e com um litening bem
                desenvolvido.
                </p>

            </div>
        </div>
    )
}

export default More