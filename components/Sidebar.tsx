"use client";
import React from "react";
import Link from "next/link";
import { store } from "../store/store";
import { shallow } from "zustand/shallow";
import SidebarCard from "../components/SidebarCard";
import { sidebar } from "@/utils/sidebar";

export default function Sidebar() {
  const [menu] = store((state: any) => {
    return [state.menu];
  }, shallow);

  return (
    <aside className={menu ? "aside-parent" : "hidden"}>
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
    </aside>
  );
}
