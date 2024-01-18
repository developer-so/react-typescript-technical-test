import Post from '../../post/PostType';
import * as Remote from '../HttpUtil';

class Repo {
    getAll = () => Remote.getAll();

    get = (id: string) => Remote.get(id);

    add = (post: Post) => Remote.add(post);

    update = (post: Post) => Remote.update(post);

    delete = (id: string) => Remote.delete(id);
}

const repo = new Repo();

export default repo;