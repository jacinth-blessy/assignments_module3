import {usePosts} from "../context/PostContext";
import {PostItem} from "../components/PostItem";

const PostList = () => {
    const{posts} = usePosts();

    return (
        <ul className = "post-list">
            {posts.map((post) => (
                <PostItem key = {post.id} post = {post} />
            ))}     
        </ul>
    );
};

export default PostList;