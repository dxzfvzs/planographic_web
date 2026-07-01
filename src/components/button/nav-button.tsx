import { Link } from "react-router-dom";
import "./button.css"

interface NavButtonProps {
  url: string;
  text: string;
  disabled?: boolean;
  className?: string;
}

export default function NavButton({ url, text, disabled, className }: NavButtonProps) {
  return (
    <Link
      to={url}
      state={{ preserveScroll: true }}
      className={`button ${className ?? ""} ${disabled ? "button--disabled" : ""}`}
    >
      {text}
    </Link>
  );
}
