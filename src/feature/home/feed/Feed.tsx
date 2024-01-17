import { useEffect, useState } from "react";
import Post from "../../post/Post";
import Tab from "./view/Tab";
import Repo from '../../data/repo/Repo';
import PostType from "../../post/PostType";
import Spinner from "./view/Spinner";
import AddPost from "../../post/view/AddPost";

export default function Feed() {
    const [posts, setPosts] = useState<Array<PostType> | null>(null)
    const [busy, setBusy] = useState(false)

    useEffect(() => {
        setBusy(true);

        Repo.getAll().then((response) => setPosts(response.data))
            .finally(() => setBusy(false));
    }, []);

    return (
        <div className="grow md:max-w-[598px] h-screen border border-gray-200 ">
            <Tab />

            <div className="hidden sm:block">
                <AddPost />
            </div>

            {busy && <Spinner />}

            {posts && posts.map((post, index) => <Post key={index} {...post} />)}
        </div>
    )
}