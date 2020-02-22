import React, { Component } from 'react';

class Home_view extends Component {

  render() {
    return (
      <>
        <div>
          <div className="divisor"></div>
          <p className="pText">Welcome Padawan <i className="fab fa-jedi-order"></i></p>
          <div className="divisor2"></div>
        </div>

        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">

          <div className="carousel-inner">

            <div className="carousel-item active">
              <img src="image/carousel-image-1.webp"
                className="d-block w-100" alt="..." />
            </div>
            
            <div className="carousel-item">
              <img src="image/carousel-image-2.jpg"
                className="d-block w-100" alt="..." />
            </div>

            <div className="carousel-item">
              <img src="image/carousel-image-3.png"
                className="d-block w-100" alt="..." />
            </div>

          </div>

        </div>
      </>
    )
  }
}

export default Home_view;