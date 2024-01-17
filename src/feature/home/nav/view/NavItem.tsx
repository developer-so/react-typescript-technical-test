import { Link } from "react-router-dom";

interface Props {
    icon: string,
    label: string,
    linkTo: string,
}

export default function NavItem(props: Props) {
    return (
        <Link className="flex group" to={props.linkTo}>
            <div className="flex shrink items-center p-[12px] group-hover:bg-gray-200 rounded rounded-full duration-200 ">
                <img src={props.icon} alt="Home icon" width={26} height={26} />
                <span className=" text-xl text-slate-900 mx-[20px] hidden xl:block">{props.label}</span>
            </div>
        </Link>
    )
}