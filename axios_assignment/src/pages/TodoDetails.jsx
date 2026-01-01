import {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import {getTodoById} from "../api/todoService";

function TodoDetails() {
    const {id} = useParams();
    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTodo = async() => {
            const data = await getTodoById(id);
            setTodo(data);
            setLoading(false);
        };
        fetchTodo();
    }, [id]);

    if(loading) return <h2>Loading Todo...</h2>;

    return (
        <div style = {{padding : "20px"}}>
            <h1>Todo Details</h1>
            <p><strong>ID:</strong>{todo.id}</p>
            <p><strong>Title:</strong>{todo.title}</p>
            <p>
                <strong>Status:</strong>{" "}
                {todo.completed? "Completed": "Pending"}
            </p>

            <Link to="/"> Back to todo List</Link>
        </div>
    );
    
}

export default TodoDetails;