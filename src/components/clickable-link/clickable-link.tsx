import React from "react";
import "./clickable-link.css"

export interface ClickableLinkProps {
  url: string;
  children: React.ReactNode;
}

export default function ClickableLink({ url, children }: ClickableLinkProps) {
  return (
    <a className="link" href={url}>{children}</a>
  );
}
