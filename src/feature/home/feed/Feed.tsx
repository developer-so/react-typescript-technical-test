import { useEffect, useState } from "react";
import Post from "../../post/Post";
import Tab from "./view/Tab";
import Repo from '../../data/repo/Repo';
import PostType from "../../post/PostType";
import Spinner from "./view/Spinner";
import AddPost from "../../post/view/AddPost";

export default function Feed({ refetch, setRefetch, }: any) {
    const [posts, setPosts] = useState<Array<PostType> | null>(null)
    const [busy, setBusy] = useState(false)

    useEffect(() => {

        setBusy(true);

        Repo.getAll().then((response) => setPosts(response.data))
            .finally(() => setBusy(false));
    }, [refetch]);

    return (
        <div className="grow md:max-w-[598px] h-screen border border-gray-200 ">
            <Tab />

            <div className="hidden sm:block">
                <AddPost setRefetch={setRefetch} />
            </div>

            {busy && <Spinner />}

            {posts &&
                posts.reverse().map((post, index) => <Post key={index}
                    id={post.id}
                    author={post.author}
                    content={post.content}
                    createdAt={post.createdAt}
                    setRefetchh={setRefetch}
                />)}
        </div>
    )
}