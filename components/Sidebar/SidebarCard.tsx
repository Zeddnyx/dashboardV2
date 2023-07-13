import Link from "next/link";
import { usePathname } from "next/navigation";

interface Card {
  sidebar: Array<{ title: string }>;
}

export default function SidebarCard({ sidebar }: Card) {
  const active = usePathname();

  return (
    <ul className="flex flex-col gap-5 capitalize">
      {sidebar.map((item, id) => (
        <li key={id} className={active == "/" + item.title ? "active-nav" : "p-1"}>
          <Link href={`/${item.title}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
