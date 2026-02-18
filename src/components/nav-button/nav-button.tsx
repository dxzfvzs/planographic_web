import { Link } from "react-router-dom";
import "./nav-button.css"

interface NavButtonProps {
  url: string;
  text: string;
}

export default function NavButton({ url, text }: NavButtonProps) {
  return (
    <Link to={url} className="nav-button">
      {text}
    </Link>
  );
}
