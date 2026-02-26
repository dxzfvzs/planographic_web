import "./button.css"

interface ButtonProps {
  text: string;
  color?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({ text, color, onClick, type = "button" }: ButtonProps) {
  return (
    <button type={type} className="button" style={color ? { backgroundColor: color } : undefined} onClick={onClick}>
      {text}
    </button>
  );
}
