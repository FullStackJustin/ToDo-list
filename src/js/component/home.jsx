import React, { component } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home(props) {
	return (
		<div>
			<h1>To-Do List</h1>
			<form>
				<input
					type="text"
					id="new-todo-input"
					className="input input__lg"
					name="text"
					autoComplete="off"
				/>
				<button type="submit" className="btn btn__primary btn__lg">
					Add
				</button>
			</form>
			<div className="filters btn-group stack-exception">
				<button
					type="button"
					className="btn toggle-btn"
					aria-pressed="true">
					<span className="visually-hidden">Show </span>
					<span>all</span>
					<span className="visually-hidden"> tasks</span>
				</button>
				<button
					type="button"
					className="btn toggle-btn"
					aria-pressed="false">
					<span className="visually-hidden">Show </span>
					<span>Active</span>
					<span className="visually-hidden"> tasks</span>
				</button>
				<button
					type="button"
					className="btn toggle-btn"
					aria-pressed="false">
					<span className="visually-hidden">Show </span>
					<span>Completed</span>
					<span className="visually-hidden"> tasks</span>
				</button>
			</div>
		</div>
	);
}

export default Home;
