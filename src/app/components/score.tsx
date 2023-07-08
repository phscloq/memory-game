
export default function Score({score, maxScore}:{score:number, maxScore:number}){

    return(
        <div className=" fixed left-0 top-0 sm:left-10 sm:top-10 sm:bg-slate-300 sm:rounded-xl sm:p-3 sm:text-xl sm:shadow-lg">
            <div className="flex sm:text-red-600 sm:font-bold">
            <p>Your Score:</p>
            <p className=" underline">{score}</p>
            </div>
            <div className="flex sm:text-green-600 sm:font-bold">
            <p>Best Score:</p>
            <p>{maxScore}</p>
            </div>
        </div>

    )
}