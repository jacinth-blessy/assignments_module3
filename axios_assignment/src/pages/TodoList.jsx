import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getTodos} from "../api/todoService";


function TodoList() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchtodos = async() => {
            const data = await getTodos();
            setTodos(data.slice(0,20));
            setLoading(false);
        };

        fetchtodos();
    }, []);

    if(loading) return <h2>Loading Todos...</h2>;

    return (
        <div style = {{ padding : "20px"}}>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo)=> (
                    <li key = {todo.id}>
                        <Link to = {`/todo/${todo.id}`}>
                        {todo.titl}
                        </Link>
                        {"-"}
                        <strong>
                            {todo.completed?"Completed": "Pending"}
                        </strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;