import Logo from '../../../common/logo/Logo'
import home from '../icon/home_FILL0_wght400_GRAD0_opsz24.svg'
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

                <button className="flex justify-center items-center xl:w-[233px] w-[50px] mt-[4px] h-[50px] xl:px-[32px] bg-sky-500 text-white font-bold text-[17px] rounded-full hover:bg-sky-600 duration-200 disabled:bg-sky-200">
                    <span className='hidden xl:block'>Post</span>
                    <img src={write} alt="Home icon" width={28} height={28} className='block xl:hidden' />
                </button>
            </div>
        </nav>
    )
}
