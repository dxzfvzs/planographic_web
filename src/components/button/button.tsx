import "./button.css"
import React from "react";

interface ButtonProps {
  text: string;
  color?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({ text, color, onClick, type = "button" }: ButtonProps) {
  return (
    <button type={type} className="button" style={{ "--subject-color": color } as React.CSSProperties} onClick={onClick}>
      {text}
    </button>
  );
}
