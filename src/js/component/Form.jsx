import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
	const inputTextHandler = (e) => {
		console.log(e.target.value);
		setInputText(e.target.value);
	};
	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, completed: false, id: Math.random() * 1000 },
		]);
		setInputText = "";
	};

	return (
		<div>
			<h1>To-Do List</h1>
			<form>
				return(
				<form>
					<input
						value={inputText}
						onChange={inputTextHandler}
						type="text"
					/>
					<button onClick={submitTodoHandler} type="submit">
						ADD
					</button>
				</form>
				{/* <input
					type="text"
					id="new-todo-input"
					className="input input__lg"
					name="text"
					autoComplete="off"
					value={inputText}
					onChange={inputTextHandler}
				/>
				<button type="button" className="btn btn__primary btn__lg">
					add
				</button> */}
			</form>
		</div>
	);
};

export default Form;
