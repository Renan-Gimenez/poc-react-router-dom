import { Link } from "react-router-dom";

interface Props {
  path: string;
  children: React.ReactNode;
}

export function Button({ path, children }: Props) {
  return (
    <Link
      className="w-fit flex items-center gap-2 bg-teal-500 text-teal-50 py-1 px-4 rounded-full"
      to={path}
    >
      {children}
    </Link>
  );
}
