import {usePosts} from "../context/PostContext.jsx";
import PostItem from "./PostItem.jsx";

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