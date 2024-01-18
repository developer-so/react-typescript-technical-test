
import { useState } from "react";
import Feed from "./feed/Feed";
import BottomNav from "./nav/view/BottomNav";
import SideNav from "./nav/view/SideNav";
import TopNav from "./nav/view/TopNav";
import Side from "./side/Side";

export default function Home() {
    const [refetch, setRefetch] = useState(false);
    return (
        <div className="flex justify-center ">
            <div className="flex flex-col grow max-w-[1265px] justify-center sm:flex-row">

                <div className="hidden sm:block">
                    <SideNav />
                </div>

                <div className=" sm:hidden">
                    <TopNav />
                </div>

                <Feed refetch={refetch} setRefetch={setRefetch} />

                <div className=" sm:hidden">
                    <BottomNav />
                </div>

                <div className="hidden lg:flex grow max-w-[350px]">

                    <Side />
                </div>
            </div>
        </div>
    );
}

