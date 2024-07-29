const Jobs = () => {

    return (
        <div className="flex flex-col items-center justify-center md:p-0 p-10 bg-principal text-white">
            <div className="m-4 flex flex-col items-center justify-center">
            <h2 className=" text-3xl pb-2  text-white">O que posso fazer por você:</h2>
            <div className="flex flex-wrap">
                <div className="p-2 m-2 flex flex-col items-center justify-center bg-white text-black w-64 h-20 rounded">
                    <p>Ajuste visual de sites</p>
                </div>
                <div className="p-2 m-2 flex flex-col items-center justify-center bg-white text-black w-64 h-20 rounded">
                    <p>Integração com wordpress para edição autonoma de conteúdos e blogs</p>
                </div>
                <div className="p-2 m-2 flex flex-col items-center justify-center bg-white text-black w-64 h-20 rounded">
                    <p>Criação de novas páginas</p>
                </div>
                <div className="p-2 m-2 flex flex-col items-center justify-center bg-white text-black w-64 h-20 rounded">
                    <p>Otimização da sua interface</p>
                </div>
                <div className="p-2 m-2 flex flex-col items-center justify-center bg-white text-black w-64 h-20 rounded">
                    <p>Correção de bugs - Frontend</p>
                </div>
                <div className="p-2 m-2 flex flex-col items-center justify-center bg-white text-black w-64 h-20 rounded">
                    <p>Consultoria para entender suas necessidades e ajudá-lo em priorizações</p>
                </div>
                <div className="p-2 m-2 flex flex-col items-center justify-center bg-white text-black w-64 h-20 rounded">
                    <p>Criação de landing-pages (O cartão de visitas da web)</p>
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default Jobs

