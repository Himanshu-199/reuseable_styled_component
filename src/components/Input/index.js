import React from "react";
import "./style.css";

export default function Input({ label, error, ...rest}) {
  return (
    <div className="input">
      {label && <label className="label"> {label}</label>}
      <input className="filed" {...rest}/>
      {error && <label className="error">{error}</label>}
    </div>
  );
}
