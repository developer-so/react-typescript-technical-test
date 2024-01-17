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

const update = (id: string, post: Post) => instance.put<Array<Post> | null>(`${postsPath}/${id}`, post);

const _delete = (id: string) => instance.delete<Array<Post> | null>(postsPath);


export { getAll, get, add, update, _delete as delete }