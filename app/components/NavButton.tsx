"use client";
import { ReactNode, useState } from "react";

interface NavButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function NavButton({ children, className = "", onClick}: NavButtonProps) {
  const [clicked, setClicked] = useState(false);

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
