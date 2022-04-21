import React, { useState } from "react";
import Form from "./Form.jsx";
import ToDoList from "./ToDoList.js";

//create your first component
function Home() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
			/>
			<ToDoList todos={todos} setTodos={setTodos} />
		</div>
	);
}

export default Home;
