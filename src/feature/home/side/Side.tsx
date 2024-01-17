import Search from "./view/Search"
import Trend from "./view/Trend"

export default function Side() {
    return (
        <div className="flex grow flex-col mx-[16px] max-w-[350px]">
            <Search />
            <Trend />
        </div>
    )
}
