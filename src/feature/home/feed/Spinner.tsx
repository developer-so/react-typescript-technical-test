
export default function Spinner() {
    return (
        <div className="flex justify-center p-[22px]">

            <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
