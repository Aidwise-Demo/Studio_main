// import React, { useCallback } from "react";
import { useContext } from "react";
import { Menu } from "lucide-react";
import { SideBarContext } from "../context/SidebarContext";
import logo from "../../src/assets/Aidwise Logo_WhiteBG.png";

const Navbar = () => {
  const { onOpen } = useContext(SideBarContext);

  return (
    <div className="w-full p-3 border-b-2 border-zinc-200 mb-10">
      <div className="max-w-7xl flex items-center justify-between m-auto">
        <Menu
          className="w-7 h-7  transition rounded-full text-zinc-600 cursor-pointer"
          onClick={onOpen}
        />
        {/* <img src={logo} alt="Logo" className="w-20 h-20 object-contain" /> */}
        <img src={logo} alt="Logo" className="object-contain" style={{ width: "100px", height: "auto" }} />

      </div>
    </div>
  );
};

export default Navbar;
