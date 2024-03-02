import React from "react";

interface Props {
  children: React.ReactNode;
}

export function Header({ children }: Props) {
  return (
    <header className="h-16 w-full bg-zinc-900 px-8">
      <div className="h-full max-w-6xl w-full flex items-center justify-between mx-auto">
        {children}
      </div>
    </header>
  );
}
