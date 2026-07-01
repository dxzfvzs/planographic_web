import NavButton from "../button/nav-button";
import Button from "../button/button";
import DownloadIcon from "../icons/download-icon";
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
      <Button
        text="Stáhnout PDF"
        icon={<DownloadIcon className="page-nav__print-icon"/>}
        className="button--ghost page-nav__print"
        onClick={() => window.print()}
      />
      <ColorToggle isNeutral={isNeutral} onToggle={onColorToggle}/>
    </div>
  );
}
