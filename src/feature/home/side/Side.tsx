import Search from "./view/Search"
import Trend from "./view/Trend"

export default function Side() {
    return (
        <div className="mx-[16px]  flex flex-col grow">
            <Search />
            <Trend />
        </div>
    )
}
