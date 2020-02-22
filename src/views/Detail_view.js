import React, { Component } from 'react';
import { Context } from "../store/appContext";

class Detail_view extends Component {
	constructor() {
		super();
		this.state = {
			item: {}
		};
  }

	componentDidMount() {
		fetch(`https://swapi.co/api/${this.props.match.params.type}/${this.props.match.params.id}`)
			.then(result => result.json())
			.then(data => this.setState({ item: data }));
	}

	dynamType(type) {
		if (type === "planets") {
      return `Terrain: ${this.state.item.terrain}\n Population: ${this.state.item.population} \n Climate: ${this.state.item.climate} 
      \n Diameter:${this.state.item.diameter}`;
        
		} else if (type === "people") {
      return `Height: ${this.state.item.height} \n Birth Year: ${this.state.item.birth_year} \n Gender: ${this.state.item.gender} 
      \n Eye Color: ${this.state.item.eye_color}`;
        
    } else {
      return `Model: ${this.state.item.model} \n Manufacturer: ${this.state.item.manufacturer} \n Cost: ${this.state.item.cost_in_credits} 
      \n Passengers: ${this.state.item.passengers}`;
    }
	}

	dynamImg(type) {
		if (type === "planets") {
			return "https://media0.giphy.com/media/l0DEJBPAYHW7XLCp2/source.gif";
		} else if (type === "people") {
			return "https://steamuserimages-a.akamaihd.net/ugc/913543086396544926/961242262BD22ACB7AC1E57ED774228E83CF464F/"; 
    } else {
			return "https://media1.tenor.com/images/3bdd9da37a3b2e1a8f427c7720ccdd7f/tenor.gif?itemid=11758918";
    }
  }
  
	render() {

    return (
      <>
        <div>
          <div className="divisor"></div>
          <p className="pText">{this.state.item.name}  <i className="fab fa-galactic-senate"/></p>
          <div className="divisor2"></div>
        </div>

        <div className="wrapper container">
          <div className="row cont1 ">
            <img className="img1 col imgSize" src={this.dynamImg(this.props.match.params.type)} alt="img"/>

            <div className="description-holder col">
              <p className="name color-text">{this.state.item.name}</p>
              <p className="description color-text">{this.dynamType(this.props.match.params.type)}</p>

              <Context.Consumer>
                {({ store, actions }) => {
                  let selected = "btn btn-outline-danger selected-" + actions.existUrl(this.state.item.url);

                  return (
                    <button type="button" className={selected}  onClick={e => actions.addFavorites(this.state.item.url) }>
                      <i className="far fa-heart"/>
                    </button>
                  );
                }}
              </Context.Consumer>

            </div>
          </div>
        </div>
      </>
		);
	}
}

export default Detail_view;
