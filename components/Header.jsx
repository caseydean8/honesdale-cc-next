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
    transition === "0px" ? setTransition("200px") : setTransition("0px");
    collapsed == "collapsed" ? setCollapsed("") : setCollapsed("collapsed");
  };

  const router = useRouter();

  const menu = [
    { title: "home", path: "/" },
    { title: "our beliefs", path: "/our-beliefs" },
    { title: "videos", path: "/videos" },
    { title: "events", path: "/events" },
    { title: "contact", path: "/contact" },
  ];

  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-light">
      <div className="container g-0">
        <div className="nav-title mx-auto">
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

        <div className="d-none d-sm-block">
          large menu
          {menu.map((item) => (
            <Link key={item.title} href={item.path}>
              <span
                className={`md:float-right mt-2 align-middle justify-self-end ml-4 cursor-pointer ${
                  router.pathname === item.path ? "text-teal" : "text-gray-500"
                }`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        {/* <Hamburger onClick={handleClick} /> */}
        <div
          className="d-block d-sm-none expand collapse navbar-collapse justify-content-end"
          style={{ height: transition }}
        >
          <ul className="navbar-nav ml-auto">
            {menu.map((item) => {
              return (
                <Link key={item.title} href={item.path}>
                  <li
                    className={`nav-link ${
                      router.pathname === item.path ? "text-info" : ""
                    }`}
                  >
                    {item.title}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
