import { ReactNode } from "react";

export default function Layout({
  children,
  section,
}: {
  children: ReactNode;
  section: ReactNode;
}) {
  return (
    <div>
      <div>{section}</div>
      {children}
    </div>
  );
}
