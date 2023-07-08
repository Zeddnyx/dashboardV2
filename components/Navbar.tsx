"use client";
import { store } from "../store/store";
import { shallow } from "zustand/shallow";

export default function Navbar() {
  const [menu, setMenu] = store((state: any) => {
    return [state.menu, state.setMenu];
  }, shallow);

  const toggleMenu = () => {
    setMenu(!menu);
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
