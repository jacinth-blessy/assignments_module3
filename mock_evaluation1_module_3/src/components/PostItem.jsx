import {usestate} from "react";
import {usePosts} from "../context/PostContext.jsx";

const PostItem = ({post}) => {
    const {updatePost, deletePost} = usePosts();
    const {isEditing, setIsEditing} = usestate(false);
    const {title, setTitle} = usestate(post.title);
    const {body, setBody} = usestate(post.body);

    const handleSave = () => {
        updatePost(post.id, {title, body});
        setIsEditing(false);
    };

    return (
        <li className = "post-card">
            {isEditing ? (
                <>
                <input
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                />
                <textarea   
                    value = {body}
                    onChange = {(e) => setBody(e.target.value)}
                />  
                <button onClick = {handleSave}>Save</button>
                </>
            ) : (
                <>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button onClick = {() => setIsEditing(true)}>Edit</button>
                <button onClick = {() => deletePost(post.id)}>Delete</button>
                </>
            )}
        </li>
    );
};

export default PostItem;