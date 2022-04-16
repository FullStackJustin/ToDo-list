import React, { component } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	constructor(props){
		super(props);
		this.state = {
			items: []
		}
		this.addItem = this.addItem.bind(this)
	}
	addItem(e) {
		if (this._inputElement.value !== ""){
			var newItem = {
				text: this._inputElement.value,
				key: Date.now()
			}
			this.setState((prevState) =>{
					return {
						items: prevState.items.concat(newItem)
				};
				});
		};
		this._inputElement.value = "";
		console.log(this.state.value);
		e.preventdefault();
	}
	return (
		<div className="todoListMain">
			<div className="header">
				<form onSubmit={this.addItem}>
					<input ref={(a) => this._inputElement = a} placeholder="I Need To..."></input>
					<button type="button">add</button>
				</form>
			</div>
		</div>
	);
};

export default Home;
