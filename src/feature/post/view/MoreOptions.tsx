import more from '../icon/more_horiz_FILL0_wght400_GRAD0_opsz24.svg'
import del from '../icon/delete_FILL0_wght400_GRAD0_opsz24.svg'
import DeleteModal from './DeleteModal'

export default function MoreOptions(props: any) {
    return (
        <>
            <div onClick={() => console.log('clicked 1')} key={props.id} className="hs-tooltip inline-block [--trigger:click] [--placement:right]">
                <div className="hs-tooltip-toggle ml-auto p-[4px] hover:bg-gray-200 rounded rounded-full duration-200 ">
                    <img src={more} alt="Home icon" width={18} height={18} />
                    <div className="py-[6px] hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity inline-block absolute invisible z-10  bg-white border border-gray-100 rounded-xl shadow-md " role="tooltip">

                        <button key={props.id} data-hs-overlay={`#hs-vertically-centered-modal-${props.id}`} onClick={() => console.log('Clicked 2')} className="flex items-center px-[12px] py-[6px]">
                            <img src={del} alt="Home icon" width={20} height={20} />
                            <span className="pl-[12px] text-[15px] font-bold text-[#f4212e]" >Delete</span>
                        </button>


                        <div className="flex items-center px-[12px] py-[6px]">
                            <div className="size-[20px] bg-gray-200 mt-[4px] rounded-lg" />
                            <div className="h-[16px] bg-gray-200 w-[100px] mt-[4px] rounded-lg mx-[8px]" />
                        </div>
                        <div className="flex items-center p-[12px] py-[6px]">
                            <div className="size-[20px] bg-gray-200 mt-[4px] rounded-lg" />
                            <div className="h-[16px] bg-gray-200 w-[100px] mt-[4px] rounded-lg mx-[8px]" />
                        </div>
                        <div className="flex items-center p-[12px] py-[6px]">
                            <div className="size-[20px] bg-gray-200 mt-[4px] rounded-lg" />
                            <div className="h-[16px] bg-gray-200 w-[100px] mt-[4px] rounded-lg mx-[8px]" />
                        </div>

                    </div>
                </div>

            </div>
            <DeleteModal id={props.id} />
        </>
    )
}
