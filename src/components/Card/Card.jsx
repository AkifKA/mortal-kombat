import React from "react";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import "./FlipTransition.css";
import "./Card.css";
function Card({ item }) {
  const [showFront, setShowFront] = useState(true);
  const { name, desc, img, gender, gif, origin, resides, species } = item;
  return (
    <CSSTransition in={showFront} timeout={300} classNames="flip">
      <div
        className="card"
        onClick={() => {
          setShowFront((v) => !v);
        }}
      >
        <div className="card-front">
          <p className="card-title">{name}</p>
          <div className="card-body">
            <img src={img} alt={name} />
          </div>
        </div>
        <div className="card-back">
          <p className="card-title">{name}</p>
          <div className="card-body">
            <p style={{ textAlign: "center" }}>The Features</p>
            <img className="gif" src={gif} alt={name} />
            <div>
              <i className="fa-solid fa-bolt-lightning"></i>
              <p>{desc}</p>
            </div>
            <div>
              <i className="fa-solid fa-bolt-lightning"></i>
              <p>Gender: {gender}</p>
            </div>
            <div>
              <i className="fa-solid fa-bolt-lightning"></i>
              <p>Origin: {origin}</p>
            </div>
            <div>
              <i className="fa-solid fa-bolt-lightning"></i>
              <p>Resides: {resides}</p>
            </div>
            <div>
              <i className="fa-solid fa-bolt-lightning"></i>
              <p>Species: {species}</p>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
export default Card;
