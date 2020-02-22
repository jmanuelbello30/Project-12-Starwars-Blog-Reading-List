import React from 'react';
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <div className="card mb-3" style={{ width: 530 }}>
      <Link to={`/details/${props.type}/${props.id}`}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={props.image} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.prop1Title}{props.prop1}</h5>
              <h5 className="card-title">{props.prop2Title}{props.prop2}</h5>
              <h5 className="card-title">{props.prop3Title}{props.prop3}</h5>
              <h5 className="card-title">{props.prop4Title}{props.prop4}</h5>
              <h5 className="card-title">{props.prop5Title}{props.prop5}</h5>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Cards;