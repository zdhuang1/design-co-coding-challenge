"use client";

type NavButtonProps = {
  id: "nav1" | "nav2" | "nav3" | "nav4";
  selected: "nav1" | "nav2" | "nav3" | "nav4";
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};

export default function NavButton({
  id,
  selected,
  onClick,
  className = "",
  children,
}: NavButtonProps) {
  const isActive = selected === id;

  return (
    <button 
      onClick={onClick} 
      className={`
        ${className} 
        ${isActive 
          ? "ring-4 ring-[var(--accent-green)] scale-95" 
          : ""}
      `}
    >
      {children}
    </button>
  );
}
