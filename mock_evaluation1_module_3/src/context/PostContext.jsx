import {createContext, useContext, useEffect, useState} from "react";
const PostContext = createContext();

export const PostsProvider = ({children}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    const updatePost = (d,updatePost)   => {
        setPosts(prev =>
            prev.map(post => post.id === d.id ? {...post, title: updatePost} : post )
        );
    };

    const deletePost = (id) => {
        setPosts(prev=> prev.filter(post=>post.id!==id));
    };

    return (
        <PostContext.Provider value={{posts, updatePost, deletePost}}>
            {children}
        </PostContext.Provider>
    );


};export const usePosts = () => {
    return useContext(PostContext);
}

export default PostContext;