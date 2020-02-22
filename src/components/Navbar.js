import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-md">
        <div className="position-a-0 row w-100 h-100">

          <div className="col-lg-12 position-a-0">

            <div className="col-lg-4 d-inline-block">
              <img src="image/logo-Navbar.png" className="rounded" alt="..."/>
              <div className="principal-title d-inline-block">Databank</div>
            </div>
            
            <div className="collapse justify-content-stretch col-lg-8 d-inline-block" id="navbar7">
              <ul className="navbar-nav ml-auto mr-5 d-inline-block col-lg-12 text-right">
                <li className="nav-item active col-lg-1 d-inline-block">
                  <a href="https://www.instagram.com/starwars/?hl=es-la" target="_blank" rel="noopener noreferrer" className="card-link"><i className="fab fa-instagram icon"/></a>
                </li>
                <li className="nav-item col-lg-1 d-inline-block">
                  <a href="https://www.facebook.com/StarWars.LATAM/?brand_redir=169299103121699" target="_blank" rel="noopener noreferrer" className="card-link"><i className="fab fa-facebook icon"/></a>
                </li>
                <li className="nav-item  col-lg-1 d-inline-block">
                  <a href="https://twitter.com/starwars?lang=es" target="_blank" rel="noopener noreferrer" className="card-link"><i className="fab fa-twitter-square icon"/></a>
                </li>
                <li className="nav-item col-lg-1 d-inline-block ">
                  <a href="https://www.youtube.com/user/starwars" target="_blank" rel="noopener noreferrer" className="card-link"><i className="fab fa-youtube icon"/></a>
                </li>
              </ul>
            </div>
          
          </div>

          <nav className="nav w-100 d-inline-block position-b-0 mb-3">
            <div className ="col-lg-12 text-center">
              <div className ="col-lg-2 d-inline-block"><Link className = "link" to="/">Home</Link></div>
              <div className ="col-lg-2 d-inline-block"><Link className = "link" to="/People_view">People</Link></div>
              <div className ="col-lg-2 d-inline-block"><Link className = "link" to="/Vehicles_view">Vehicles</Link></div>
              <div className ="col-lg-2 d-inline-block"><Link className = "link" to="/Planets_view">Planets</Link></div>
              <div className ="col-lg-2 d-inline-block"><Link className = "link" to="/Favorites">Favorites  <i className="far fa-star"></i></Link></div>
            </div>
          </nav>
              
        </div>
      </nav>

    )
  }
}

export default NavBar;