import { useEffect, useState } from "react";
import Post from "../../post/Post";
import Tab from "./tab/Tab";
// import axios from "axios";
import Repo from '../../data/repo/Repo';
import PostType from "../../post/PostType";
import Spinner from "./Spinner";
import AddPost from "../../post/AddPost";

export default function Feed() {
    const [posts, setPosts] = useState<Array<PostType> | null>(null)
    const [busy, setBusy] = useState(false)

    useEffect(() => {
        setBusy(true);
        Repo.getAll().then(function (response) {
            setPosts(response.data)
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                setBusy(false)
            });
    }, [])

    return (
        <div className=" grow max-w-[598px] h-screen border border-gray-200 ">

            <Tab />
            <AddPost />
            {busy && <Spinner />}
            {posts && posts.map((post, index) => {
                return <Post key={index}
                    id={post.id}
                    author={post.author}
                    content={post.content}
                    createdAt={post.createdAt} />
            })
            }
        </div>
    )
}