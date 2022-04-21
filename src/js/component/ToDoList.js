import React from "react";
import Todo from "./ToDo";

const TodoList = ({ todos, setTodos }) => {
	return (
		<div>
			<ul>
				{todos.map((todo) => (
					<Todo
						key={todo.id}
						setTodos={setTodos}
						todos={todos}
						todo={todo}
						text={todo.text}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
