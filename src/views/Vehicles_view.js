import React, { Component } from 'react';
import Cards from "../components/Cards";
import { Context } from "../store/appContext";

class Vehicles_view extends Component {
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
					<p className="pText">Databank - Vehicles  <i className="fab fa-old-republic"/></p>
					<div className="divisor2"></div>
				</div>

				<div className="container">
					<div className="row">

						<Context.Consumer>
							{
								({ store, actions }) => {
									return store.vehicles.map((item, index) => (

										<Cards key={index} image={"image/card-vechicle.jpg"} prop1={item.name} prop1Title="Name : " prop2={item.model} prop2Title="Model : " prop3={item.manufacturer}
											prop3Title="Manufacturer : " prop4={item.cost_in_credits} prop4Title="Cost: " prop5={item.passengers} prop5Title="Number of passengers: " type="vehicles" id={this.getIdUsing(item.url)} />
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

export default Vehicles_view;