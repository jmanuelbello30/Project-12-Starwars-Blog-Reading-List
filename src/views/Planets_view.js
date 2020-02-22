import React, { Component } from 'react';
import Cards from "../components/Cards";
import { Context } from "../store/appContext";

class Planets_view extends Component {
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
					<p className="pText">Databank - Planets  <i className="fab fa-galactic-republic"/></p>
					<div className="divisor2"></div>
				</div>

				<div className="container">
					<div className="row">

						<Context.Consumer>
							{
								({ store, actions }) => {
									return store.planets.map((item, index) => (

										<Cards key={index} image={"image/card-planets.png"} prop1={item.name} prop1Title="Name : " prop2={item.terrain} prop2Title="Terrain : " prop3={item.population}
											prop3Title="Population : " prop4={item.climate} prop4Title="Climate : " prop5={item.diameter} prop5Title="Diameter : "
											type="planets" id={this.getIdUsing(item.url)} />
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

export default Planets_view;