import React, { Component } from 'react';
import { Context } from "../store/appContext";
import Cards from "../components/Cards";

class Favorites_view extends Component {
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
					<p className="pText">Padawan - Favorites <i className="fas fa-journal-whills"/></p>
					<div className="divisor2"></div>
				</div>

				<div className="container">
					<div className="row">

						<Context.Consumer>
							{
								({ store, actions }) => {
									if (store.favorites.length) {
										return store.favorites.map((item, index) => {

											if (item.url.includes("people")) {
												return <Cards key={index} image={"image/card-people.jpg"} prop1={item.name} prop1Title="Name : " prop2={item.height} prop2Title="Height : " prop3={item.birth_year} prop3Title="Birth Year : " prop4={item.gender} prop4Title="Gender : " prop5={item.eye_color} prop5Title="Eye Color : " type="people" id={this.getIdUsing(item.url)} />

											} else if (item.url.includes("vehicles")) {
												return <Cards key={index} image={"image/card-vechicle.jpg"} prop1={item.name} prop1Title="Name : " prop2={item.model} prop2Title="Model : " prop3={item.manufacturer} prop3Title="Manufacturer : " prop4={item.cost_in_credits} prop4Title="Cost: " prop5={item.passengers} prop5Title="Number of passengers: " type="vehicles" id={this.getIdUsing(item.url)} />

											} else {
												return <Cards key={index} image={"image/card-planets.png"} prop1={item.name} prop1Title="Name : " prop2={item.terrain} prop2Title="Terrain : " 	prop3={item.population} prop3Title="Population : " prop4={item.climate} prop4Title="Climate : " prop5={item.diameter} prop5Title="Diameter : " type="planets" id={this.getIdUsing(item.url)} />
											}

										})
									}
								}
							}
						</Context.Consumer>

					</div>
				</div>
			</>
		);
	}
}

export default Favorites_view;