import React from "react";
import avatar from "./image.jpg";
import "./style.css";

//here we destructure the props
export default function Avatar({ size = "s", type = "square" }) {
  return (
    <div className="card">
      <div className="image">
        <img src={avatar} alt="img" className={`${size} ${type}`} />
      </div>
      <div className='content'>
        <p>size: <strong> {size}</strong></p>
        <p>type: <strong> {type}</strong></p>
      </div>
    </div>
  );
}
