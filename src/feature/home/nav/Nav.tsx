// import { Link } from 'react-router-dom'
import Logo from './Logo'
import home from './icon/home_FILL0_wght400_GRAD0_opsz24.svg'
import NavItem from './NavItem'
import NavItemPlaceholder from './NavItemPlaceholder'

export default function Nav() {
    return (
        <div className="w-[275px] relative flex">
            <div className="w-[275px] fixed top-0 bottom-0  overflow-y-auto z-[60]  ">
                <Logo />
                <NavItem icon={home} label='Home' linkTo='/' />
                <NavItemPlaceholder />
                <NavItemPlaceholder />
                <NavItemPlaceholder />
                <NavItemPlaceholder />
            </div>
        </div>
    )
}
