import React from "react";

const Form = ({inputText, setInputText, todos, setTodos}) => {
	const inputTextHandler = (elem) => {
		console.log(elem.target.value);
		setInputText(elem.target.value);
	};
	const submitTodoHandler = (elem) => {
		elem.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, completed: false, id: Math.random() * 1000 },
		]);
		setInputText = "";
		console.log(submitTodoHandler);
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
