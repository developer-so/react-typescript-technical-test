import { Link } from "react-router-dom";

import home from '../icon/home_FILL0_wght400_GRAD0_opsz24.svg';
import write from '../icon/ink_pen_FILL0_wght400_GRAD0_opsz24.svg';
import IconPlaceholder from "../../../common/icon/IconPlaceholder";

export default function BottomNav() {
    return (
        <div className="flex flex-col">
            <button className="flex fixed bottom-20 right-6 justify-center items-center  size-[50px]  bg-sky-500  rounded-full hover:bg-sky-600 duration-200 disabled:bg-sky-200">
                <img src={write} alt="Home icon" width={28} height={28} className='block xl:hidden' />
            </button>
            <div className="flex h-[53px] w-full bg-white fixed bottom-0 border-t-[1px]">
                <Link className="flex grow justify-center group" to={'/'}>
                    <div className="flex  p-[11px] group-hover:bg-gray-200 rounded rounded-full duration-200 ">
                        <img src={home} alt="Home icon" width={28} height={28} />
                    </div>
                </Link>

                <div className="flex grow justify-center items-center">
                    <IconPlaceholder />
                </div>

                <div className="flex grow justify-center items-center">
                    <IconPlaceholder />
                </div>

                <div className="flex grow justify-center items-center">
                    <IconPlaceholder />
                </div>
            </div>
        </div>
    )
}
