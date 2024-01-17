
import Feed from "./feed/Feed";
import BottomNav from "./nav/view/BottomNav";
import SideNav from "./nav/view/SideNav";
import TopNav from "./nav/view/TopNav";
import Side from "./side/Side";

export default function Home() {
    return (
        <div className="flex justify-center ">
            <div className="flex flex-col max-w-[1265px] justify-center sm:flex-row">

                <div className="hidden sm:block">
                    <SideNav />
                </div>

                <div className=" sm:hidden">
                    <TopNav />
                </div>

                <Feed />

                <div className=" sm:hidden">
                    <BottomNav />
                </div>

                <div className="hidden lg:flex ">
                    <Side />
                </div>
            </div>
        </div>
    );
}

