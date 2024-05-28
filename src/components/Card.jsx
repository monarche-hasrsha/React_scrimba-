import React from "react";

export default function Card() {
    return (
      <section className="card-content">
        <img src= "./katie-zaferes.png" className="card-content-img"/><br/>
        <p className="ratings">
          <img src="./star.png" className="star-icon"/>
          <span>5.0</span>
          <span className="no-of-ratings">(6)•USA</span>
        </p>
        <p className="about">Life lessons with Katie Zaferes</p>
        <p className="priceTag">
          <strong>From $136</strong>
          <span>/person</span>
        </p>
      </section>  
    )
}