import "./button.css"

interface ButtonProps {
  text: string;
  color?: string;
  onClick?: () => void;
}

export default function Button({ text, color, onClick }: ButtonProps) {
  return (
    <button className="button" style={color ? { backgroundColor: color } : undefined} onClick={onClick}>
      {text}
    </button>
  );
}
