import { formatDate } from "../common/date/DateUtil";
import Action from "./view/action/Action";
import Avatar from "../common/avatar/Avatar";
import PostType from "./PostType";

export default function Post(post: PostType) {
    return (
        <div className="flex flex-col">
            <div className="flex px-[16px] py-[12px] ">
                {/* <div className="mt-[12px] " />
                <a className="size-[44px] mr-[12px]" href="/">
                    <div className="size-[40px] bg-gray-500 rounded-full"></div>
                </a> */}
                <div className=" mr-[12px]">
                    <Avatar />
                </div>
                <div className="flex flex-col mb-[2px]">
                    <div>
                        <a className="mr-[2px]" href="/">
                            <span className="text-[15px] font-bold text-[#0f1419]">{post.author}</span>
                        </a>

                        <a className="ml-[4px]" href="/">
                            <span className="text-[15px] text-[#536471]">@{post.author}</span>
                        </a>

                        <span className="text-[15px] text-[#536471] px-[4px]">·</span>
                        <span className="text-[15px] text-[#536471]">{formatDate(post.createdAt!)}</span>

                    </div>

                    <p className="text-[15px] text-[#0f1419]">
                        {post.content}
                    </p>
                    <Action />
                </div>
            </div>
            <hr />
        </div>
    )
}
