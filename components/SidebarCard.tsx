import Link from "next/link";
import { usePathname } from "next/navigation";

interface Card {
  sidebar: Array<{ title: string }>;
}

export default function SidebarCard({ sidebar }: Card) {
  const active = usePathname();

  return (
    <ul className="flex flex-col gap-5">
      {sidebar.map((item, id) => (
        <li key={id} className={active == "/" + item.title ? "bg-red p-1" : ""}>
          <Link href={`/${item.title}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
