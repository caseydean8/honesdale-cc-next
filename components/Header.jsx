import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import { getCategories } from "../services";
import Hamburger from "./Hamburger";

const Header = () => {
  // const [categories, setCategories] = useState([]);
  const desktop = typeof window !== "undefined" && window.innerWidth <= 767.98;
  const [isDesktop, setDesktop] = useState(desktop);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const [transition, setTransition] = useState("0px");
  const [collapsed, setCollapsed] = useState("collapsed");

  const handleClick = (e) => {
    transition === "0px" ? setTransition("232px") : setTransition("0px");
    collapsed == "collapsed" ? setCollapsed("") : setCollapsed("collapsed");
  };

  const router = useRouter();

  const menu = [
    { title: "home", path: "/" },
    { title: "our beliefs", path: "/our-beliefs" },
    { title: "videos", path: "/videos" },
    { title: "events", path: "/events" },
    { title: "contact", path: "/contact" },
    { title: "new here?", path: "/new-here" },
  ];

  const menuMap = menu.map((item) => {
    return (
      <Link key={item.title} href={item.path}>
        <li
          className={`nav-link ${
            router.pathname === item.path ? "text-info" : "text-dark"
          }`}
          onClick={handleClick}
        >
          {item.title}
        </li>
      </Link>
    );
  });

  return (
    <nav className="navbar fixed-top navbar-light">
      <div className="container">
        <div className="d-none d-sm-block mx-auto">
          <h2>HONESDALE COMMUNITY CHURCH</h2>
        </div>

        <div className="d-none d-sm-block mx-auto">
          <ul className="nav">{menuMap}</ul>
        </div>

        {/* Mobile Menu */}
        <div className="d-block d-sm-none mx-auto">
          <h2>
            HONESDALE <br /> COMMUNITY CHURCH
          </h2>
        </div>

        <div className="hamburger z-3 position-absolute top-0 end-0 d-sm-none">
          <button
            className={`navbar-toggler ${collapsed} ms-2`}
            type="button"
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div
          className="d-block d-sm-none expand collapse navbar-collapse"
          style={{ height: transition }}
        >
          <ul className="navbar-nav">{menuMap}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
