import React from "react";
import SubHeading from "../SubHeading";
import "./style.css";

export default function Heading({
  backgroundColor,
  primaryText,
  subHeading,
  children,
}) {
  return (
    <div className="heading" style={{ background: backgroundColor ? backgroundColor : "" }}>
      {primaryText && <h1>{primaryText}</h1>}
      {!children && subHeading && <SubHeading text={subHeading} />}
      {children && children}
    </div>
  );
}
