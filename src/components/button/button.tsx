import "./button.css"
import React from "react";

interface ButtonProps {
  text: string;
  color?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  icon?: React.ReactNode;
}

export default function Button({ text, color, onClick, type = "button", className, icon }: ButtonProps) {
  return (
    <button type={type} className={`button ${className ?? ""}`} style={{ "--subject-color": color } as React.CSSProperties} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}
