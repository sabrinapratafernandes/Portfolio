import jobsData from "../data/jobsData"

const Jobs = () => {

    return (
        <div className="flex flex-col items-center justify-center md:p-0 p-10 bg-principal text-white">
            <div className="m-4 flex flex-col items-center justify-center">
            <h2 className=" text-3xl pb-2  text-white">O que posso fazer por você:</h2>
            <div className="flex flex-wrap justify-center align-center w-full">

                {jobsData.map((job, index) => (
                    <div className="p-4 m-2 flex flex-col items-center justify-center bg-white text-black  h-20 rounded hover:bg-yellow w-64 md:w-auto" key={index}>
                    <p>{job.text}</p>
                    </div>
                ))}
                
            </div>
            </div>
        </div>
    )
}

export default Jobs

