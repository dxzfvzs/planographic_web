import { Link } from "react-router-dom";
import "./button.css"
import React from "react";

interface NavButtonProps {
  url: string;
  text: string;
  color?: string;
  disabled?: boolean;
}

export default function NavButton({ url, text, color, disabled }: NavButtonProps) {
  return (
    <Link to={url} className={`button ${disabled ? "button--disabled" : ""}`}
          style={{ "--subject-color": color } as React.CSSProperties}>
      {text}
    </Link>
  );
}
