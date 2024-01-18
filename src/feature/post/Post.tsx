import { formatDate } from "../common/date/DateUtil";
import PostAction from "./view/action/PostAction";
import Avatar from "../common/avatar/Avatar";
import PostType from "./PostType";
import editIcon from './icon/edit_FILL0_wght400_GRAD0_opsz24.svg';
import del from './icon/delete_FILL0_wght400_GRAD0_opsz24.svg';
import { Link } from "react-router-dom";
import { useState } from "react";
import Repo from "../data/repo/Repo";
import AutoHeightTextarea from "./view/AutoHeightTextArea";

export default function Post(props: any) {
    const [busy, setBusy] = useState(false);
    const [edit, setEdit] = useState(false);
    const [content, setContent] = useState<string>('');



    const updatePost = () => {
        setBusy(true);
        const post: PostType = {
            id: props.id,
            author: props.author,
            content: content,
        }

        Repo.update(post).then((response) => props.setRefetchh(true))
            .catch((err) => console.log(err))
            .finally(() => {
                setBusy(false)
                setEdit(false)
            });
    }

    const deletePost = () => {
        setBusy(true);
        Repo.delete(props.id!).then((response) => props.setRefetchh(true))
            .catch((err) => console.log(err))
            .finally(() => setBusy(false));
    }


    const onChange = (element: React.FormEvent<HTMLParagraphElement>) => {
        element.target.addEventListener('input', (event) => {
            console.log(event)
        })
    }

    return (
        <div className="flex flex-col">
            <div className="flex px-[16px] py-[12px] ">
                <div className=" mr-[12px]">
                    <Avatar />
                </div>
                <div className="flex flex-col grow mb-[2px]">

                    <div className="flex items-center whitespace-nowrap">
                        <Link className="mr-[2px] truncate" to="/">
                            <span className="text-[15px] font-bold text-[#0f1419]">{props.author}</span>
                        </Link>
                        {/* text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden; */}
                        <Link className="ml-[4px] overflow-ellipsis truncate" to="/">
                            <span className="text-[15px] text-[#536471]">@{props.author.toLowerCase().replace(/\s/g, "")}</span>
                        </Link>

                        <span className="text-[15px] text-[#536471] px-[4px]">·</span>
                        <span className="text-[15px] text-[#536471]">{formatDate(props.createdAt!)}</span>

                        <button onClick={() => setEdit(!edit)} type="button" className="ml-auto p-[4px] hover:bg-gray-200 rounded rounded-full duration-200 ">
                            <img src={editIcon} alt="Home icon" width={18} height={18} />
                        </button>
                        <button onClick={deletePost} type="button" className="ml-[8px]  p-[4px] hover:bg-gray-200 rounded rounded-full duration-200 ">
                            <img src={del} alt="Home icon" width={18} height={18} />
                        </button>

                    </div>

                    {!edit && <p className="text-[15px] text-[#0f1419]" contentEditable={edit} onChange={onChange}>
                        {props.content}
                    </p>}

                    {edit && <AutoHeightTextarea value={props.content} setContent={setContent} />}

                    {edit && <button className="self-end h-[36px] px-[16px] ml-[12px] bg-sky-500 text-white font-bold text-[15px] rounded-full hover:bg-sky-600 duration-200 disabled:bg-sky-200"
                        disabled={busy}
                        onClick={updatePost}>
                        Post
                    </button>}

                    <PostAction />
                </div>
            </div>

            <hr />
        </div>
    )
}
