import { useState } from "react";
import ActionPlaceholder from "./action/ActionPlaceholder";
import Avatar from "../../common/avatar/Avatar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Repo from "../../data/repo/Repo";
import PostType from "../PostType";
import { AvatarSize } from "../../common/avatar/AvatarSize";

export default function AddPost() {
    const [post, setPost] = useState<string>('');
    const [busy, setBusy] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setPost(e.target.value);

    const newPost: PostType = { author: "Laurentiu", content: post }

    function addPost() {
        setBusy(true);
        Repo.add(newPost).then((response) => setPost(''))
            .finally(() => setBusy(false));
    }

    const notify = () => toast.success("Wow so easy!");

    return (
        <div className="flex flex-col">
            <div className="flex px-[16px] pb-[12px] ">
                <div className="mt-[12px] " />
                <div className=" mr-[12px] pt-[12px]">
                    <Avatar size={AvatarSize.large} />
                </div>
                <div className="flex flex-col mb-[2px] pt-[4px] w-full">

                    <textarea id="hs-textarea-with-corner-hint"
                        className="resize-none py-3 focus:outline-none w-full text-xl text-[#0f1419] placeholder-[#536471] disabled:text-gray-300"
                        rows={1.5}
                        placeholder="What is happening?!"
                        disabled={busy}
                        value={post}
                        onChange={onChange} />

                    <div className="flex justify-between h-[48px]">
                        <div className="flex items-center ml-[-8px]">
                            <ActionPlaceholder />
                            <ActionPlaceholder />
                            <ActionPlaceholder />
                            <ActionPlaceholder />
                            <ActionPlaceholder />
                            <ActionPlaceholder />
                        </div>
                        <div className="mt-[8px]">
                            <button className="h-[36px] 
                                px-[16px]
                                ml-[12px]
                                bg-sky-500
                                text-white
                                font-bold
                                text-[15px] 
                                rounded-full
                                hover:bg-sky-600
                                duration-200
                                disabled:bg-sky-200
                                "
                                disabled={busy}
                                onClick={addPost}>
                                Post
                            </button>
                            <ToastContainer
                                toastClassName={(context) =>

                                    "bg-sky-500  flex p-1 min-h-10 rounded"
                                }
                                position="bottom-center"
                                icon={false}
                                // autoClose={5000}
                                hideProgressBar
                                closeButton={false}
                                closeOnClick
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"

                            />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}
