import "./button.css"
import React from "react";

interface ButtonProps {
  text: string;
  color?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({ text, color, onClick, type = "button", className }: ButtonProps) {
  return (
    <button type={type} className={`button ${className ?? ""}`} style={{ "--subject-color": color } as React.CSSProperties} onClick={onClick}>
      {text}
    </button>
  );
}
