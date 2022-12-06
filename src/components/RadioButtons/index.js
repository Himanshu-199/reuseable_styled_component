import React, { Fragment } from "react";
import "./style.css";

export default function RadioButtons({
  error,
  label,
  options,
  onChange,
  value,
}) {
  return (
    <div className="radioButton">
      {label && <label className="label">{label}</label>}
      <div className="options">
        {options?.length &&
          options.map((option) => {
            return (
              <Fragment key={option.name}>
                <input
                  id={option.name}
                  type="radio"
                  name={label}
                  value={option.value}
                  checked={value === option.value}
                  onChange={onChange}
                />
                <label
                  className="optionLable"
                  htmlFor={option.name}
                  style={{ arginRight: 30 }}
                >
                  {option.name}
                </label>
              </Fragment>
            );
          })}
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
}
