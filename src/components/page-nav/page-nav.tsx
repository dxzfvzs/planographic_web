import NavButton from "../button/nav-button";
import ColorToggle from "./color-toggle";
import "./page-nav.css";

interface PageNavProps {
  backUrl: string;
  onColorToggle: () => void;
  isNeutral: boolean;
}

export default function PageNav({ backUrl, onColorToggle, isNeutral }: PageNavProps) {
  return (
    <div className="page-nav">
      <NavButton url={backUrl} text={"← Zpátky"} className="button--ghost"/>
      <ColorToggle isNeutral={isNeutral} onToggle={onColorToggle}/>
    </div>
  );
}
