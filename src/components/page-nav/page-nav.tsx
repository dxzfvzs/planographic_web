import NavButton from "../button/nav-button";
import Button from "../button/button";
import "./page-nav.css";

interface PageNavProps {
  backUrl: string;
  onColorToggle: () => void;
}

export default function PageNav({ backUrl, onColorToggle }: PageNavProps) {
  return (
    <div className="page-nav">
      <NavButton url={backUrl} text={"← Zpátky"} className="button--ghost"/>
      <Button text={"⇄ Změň barvu"} onClick={onColorToggle} className="button--ghost"/>
    </div>
  );
}
