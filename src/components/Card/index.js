import React from "react";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import Typography from "../Typography";
import "./style.css";

export default function Card({
  backgroundColor,
  className,
  children,
  title,
  subTitle,
  description,
}) {
  return (
    <div
      style={{ background: backgroundColor ? backgroundColor : "" }}
      className={`${className ? className : ""} card`}
    >
      {}
      {children ? (
        children
      ) : (
        <>
          {title && <Heading primaryText={title} />}
          {subTitle && <SubHeading text={subTitle} />}
          {description && <Typography text={description} />}
        </>
      )}
    </div>
  );
}
