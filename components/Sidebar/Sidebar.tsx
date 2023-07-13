"use client";
import Link from "next/link";
import { useSidebar } from "@/store/store";
import SidebarCard from "@/components/Sidebar/SidebarCard";
import { sidebar } from "./sidebar";

export default function Sidebar() {
  const [setSidebar] = useSidebar();

  if (!setSidebar) return null;

  return (
    <nav className="aside-parent">
      <div className="nav-sidebar">
        <div className="grid gap-5">
          <div>
            <Link href="/">
              <h2>Logo</h2>
            </Link>
          </div>
          <SidebarCard sidebar={sidebar} />
        </div>

        <div>
          <Link href="logout">
            <h2>Exit</h2>
          </Link>
        </div>
      </div>
    </nav>
  );
}
