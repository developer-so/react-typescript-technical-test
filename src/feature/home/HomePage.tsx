
import Feed from "./feed/Feed";
import Nav from "./nav/Nav";
import Side from "./side/Side";

export default function Home() {
    return (
        <div className="flex max-w-[1265px] m-auto">
            <Nav />
            <Feed />
            <Side />
        </div>
    );
}

