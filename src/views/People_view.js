import React, { Component } from 'react';
import Cards from "../components/Cards";
import { Context } from "../store/appContext";

class People_view extends Component {
	getIdUsing(url) {
		let temp = "";
		for (var i = url.length - 2; i >= 0; i--) {
			if (url[i] !== "/") temp = url[i] + temp;
			else return parseInt(temp);
		}
	}

	render() {
		return (
			<>
				<div>
					<div className="divisor"></div>
					<p className="pText">Databank - People  <i className="fab fa-galactic-senate"/></p>
					<div className="divisor2"></div>
				</div>

				<div className="container">
					<div className="row">

						<Context.Consumer>

							{
								({ store, actions }) => {
									return store.characters.map((item, index) => (

										<Cards key={index} image={"image/card-people.jpg"} prop1={item.name} prop1Title="Name : " prop2={item.height} prop2Title="Height : " prop3={item.birth_year}
											prop3Title="Birth Year : " prop4={item.gender} prop4Title="Gender : " prop5={item.eye_color} prop5Title="Eye Color : "
											type="people" id={this.getIdUsing(item.url)} />
									))
								}
							}

						</Context.Consumer>
						
					</div>
				</div>
			</>
		);
	}
}

export default People_view;
