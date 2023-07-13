"use client";
import { useSidebar } from "../store/store";

export default function Navbar() {
  const [_, setSidebar] = useSidebar();

  const toggleMenu = () => {
    setSidebar((prev: boolean) => !prev);
  };

  return (
    <nav>
      <div className="nav-parent">
        <div className="flex items-center gap-5">
          <button>
            <h1 onClick={toggleMenu}>Menu</h1>
          </button>
          <h1>Dashboard</h1>
        </div>

        <div>
          <p>Profile pic</p>
        </div>
      </div>
    </nav>
  );
}
