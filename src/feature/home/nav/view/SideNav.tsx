import Logo from '../../../common/logo/Logo'
import AddPost, { AddPostType } from '../../../post/view/AddPost'
import home from '../icon/home_FILL1_wght400_GRAD0_opsz40.svg'
import write from '../icon/ink_pen_FILL0_wght400_GRAD0_opsz24.svg'
import NavItem from './NavItem'
import NavItemPlaceholder from './NavItemPlaceholder'

export default function SideNav() {
    return (
        <nav className="flex justify-end  w-[68px] sm-[88px] xl:w-[275px]   relative">
            <div className="flex flex-col items-center xl:items-start xl:w-[275px]  w-[68px] px-[4px] md:px-[8px] fixed top-0 bottom-0  overflow-y-auto z-[60]  ">
                <Logo />

                <NavItem icon={home} label='Home' linkTo='/' />

                <NavItemPlaceholder />

                <NavItemPlaceholder />

                <NavItemPlaceholder />

                <NavItemPlaceholder />

                <button data-hs-overlay="#hs-basic-modal" className="flex justify-center items-center xl:w-[233px] w-[50px] mt-[4px] h-[50px] xl:px-[32px] bg-sky-500 text-white font-bold text-[17px] rounded-full hover:bg-sky-600 duration-200 disabled:bg-sky-200">
                    <span className='hidden xl:block'>Post</span>
                    <img src={write} alt="Home icon" width={28} height={28} className='block xl:hidden' />
                </button>
            </div>

            <div id="hs-basic-modal" className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden w-full h-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none">
                <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div className="flex justify-between items-center py-3 px-4">
                            <button type="button" className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-basic-modal">
                                <span className="sr-only">Close</span>
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>

                            <div className="h-[15px] bg-gray-200 w-[80px] rounded-md" />
                        </div>
                        <AddPost addPostType={AddPostType.modal} />
                    </div>
                </div>
            </div>

        </nav>
    )
}
