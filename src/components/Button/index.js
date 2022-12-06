import React from "react";
import "./style.css";

const buttonVariants = ["primary", "drak", "light"];

export default function Button({
  backgroundColor,
  type,
  variant = "primary",
  title,
  textColor,
}) {
  const getButtonVariant = (variant) => {
    return buttonVariants.includes(variant) ? variant : "";
  };
  return (
    <button
      type={type}
      style={{
        background: backgroundColor ? backgroundColor : "",
        color: textColor || "",
      }}
      className={`button ${getButtonVariant(variant)} `}
    >
      {title}
    </button>
  );
}
