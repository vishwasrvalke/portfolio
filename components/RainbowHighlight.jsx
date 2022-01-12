import React from "react";
import { RoughNotation } from "react-rough-notation";

export const RainbowHighlight = ({ color, children, type = "highlight" }) => {
  const animationDuration = Math.floor(30 * children.length);

  return (
    <RoughNotation
      type={type}
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};
