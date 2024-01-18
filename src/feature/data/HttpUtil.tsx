import axios from "axios";
import { baseUrl, postsPath } from "./source/remote/RemoteAPI";
import Post from '../post/PostType';

const instance = axios.create({
    baseURL: baseUrl,
    // timeout: 5000,
    headers: {
        "Content-type": "application/json"
    }
})

const getAll = () => instance.get<Array<Post> | null>(postsPath);

const get = (id: string) => instance.get<Post | null>(postsPath);

const add = (post: Post) => instance.post<Post>(postsPath, post);

const update = (post: Post) => {
    console.log('tht thteh tteh post', post)
    return instance.patch<Post>(`${postsPath}/${post.id}`, post);
}

const _delete = (id: string) => instance.delete<Post>(`${postsPath}/${id}`);



export { getAll, get, add, update, _delete as delete }