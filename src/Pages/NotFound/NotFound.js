import React from "react";
import image from "../../img/404.png";
import "./styles.css";

export default function NotFound() {
  return (
    <div className="error-container">
      <div className="left">
        <h1>404</h1>
        <p>La página que estás buscando no existe!</p>
      </div>
      <div className="right">
        <img src={image} alt="UPSIN" width="120px"></img>
      </div>
    </div>
  );
}
