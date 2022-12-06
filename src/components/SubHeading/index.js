import React from "react";
import "./style.css";

export default function SubHeading({ backgroundColor, text }) {
  return (
    <div
      className="subHeading"
      style={{ background: backgroundColor ? backgroundColor : "" }}
    >
      {text && <h3>{text}</h3>}
    </div>
  );
}
