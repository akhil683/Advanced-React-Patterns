import React from "react";

export const Partial = (Component, partialProps) => {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
};

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : "32px",
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};

export const RedButtonPartial = Partial(Button, { color: "red" });
export const SmallRedButtonPartial = Partial(RedButtonPartial, {
  size: "small",
});
