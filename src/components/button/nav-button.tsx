import { Link } from "react-router-dom";
import "./button.css"
import React from "react";

interface NavButtonProps {
  url: string;
  text: string;
  color?: string;
}

export default function NavButton({ url, text, color }: NavButtonProps) {
  return (
    <Link to={url} className="button" style={{ "--subject-color": color } as React.CSSProperties}>
      {text}
    </Link>
  );
}
