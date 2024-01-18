export default function DeleteModal(props: any) {
    return (
        <div key={props.id} id={`hs-vertically-centered-modal-${props.id}`} className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all  w-[320px] sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center justify-center">
                <div className="w-full flex flex-col p-[32px] items-start bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">

                    <span className="font-bold text-[20px]">Delete Post?</span>
                    <p className="mt-[16px]">Are you sure you want to delete the post? Click delete else cancel to abort.</p>
                    <button onClick={() => console.log('clicked delete')} data-hs-overlay="#hs-basic-modal" className="flex justify-center items-center w-[256px] px-[24px] mt-[24px] h-[50px] xl:px-[32px] bg-[#f4212e] text-white font-bold text-[17px] rounded-full hover:bg-sky-600 duration-200 disabled:bg-sky-200">
                        Delete
                    </button>
                    <button data-hs-overlay="#hs-basic-modal" className="flex justify-center items-center w-[256px] px-[24px] mt-[12px] h-[50px] xl:px-[32px] border  font-bold text-[17px] rounded-full hover:bg-sky-600 duration-200 disabled:bg-sky-200">
                        Cancel
                    </button>
                </div>
            </div>
        </div>

    )
}
