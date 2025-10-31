"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mobile_menus } from "@/data/menu-data";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <ul>
      {mobile_menus.map((menu) => (
        <li
          key={menu.id}
          className={`${menu.has_dropdown ? "has-dropdown" : ""}`}
        >
          <Link href={menu.link}>{menu.name}</Link>
        
        </li>
      ))}
    </ul>
  );
};

export default MobileMenus;
