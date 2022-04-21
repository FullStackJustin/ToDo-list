
import React from "react";

const Todo = ({text, todo, todos, setToDos}) => {
    const deleteHandler = () => {
        setToDos(todos.filter((elem) => elem.id !== todo.id)
        )
    }
    return (
        <div>
            <button onClick={deleteHandler}>
                Delete
            </button>
        </div>
    )
}
export default Todo