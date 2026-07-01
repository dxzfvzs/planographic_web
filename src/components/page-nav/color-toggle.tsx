import "./color-toggle.css";

interface ColorToggleProps {
  isNeutral: boolean;
  onToggle: () => void;
}

export default function ColorToggle({ isNeutral, onToggle }: ColorToggleProps) {
  return (
    <button
      className={`color-toggle${!isNeutral ? " color-toggle--rgb" : ""}`}
      onClick={onToggle}
      aria-label="Přepnout barvu stránky"
    >
      <div className="color-toggle__pill">
        <div className="color-toggle__thumb">
          <span className="color-toggle__thumb-text color-toggle__thumb-text--bw">BW</span>
          <span className="color-toggle__thumb-text color-toggle__thumb-text--rgb">RGB</span>
        </div>
        <span className="color-toggle__option color-toggle__option--bw">BW</span>
        <span className="color-toggle__option color-toggle__option--rgb">RGB</span>
      </div>
    </button>
  );
}
