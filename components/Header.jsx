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
  // const [transition, setTransition] = useState("0px");

  // const router = useRouter();

  // const handleClick = (e) => {
  //   transition === "0px" ? setTransition("119px") : setTransition("0px");
  // };

  // useEffect(() => {
  //   getCategories().then((newCategories) => setCategories(newCategories));
  // }, []);

  const menu = [
    { title: "home", path: "/" },
    { title: "our beliefs", path: "/our-beliefs" },
    { title: "videos", path: "/videos" },
    { title: "events", path: "/events" },
    { title: "contact", path: "/contact" },
  ];

  // const urls = [
  //   ["/", "home"],
  //   ["/our beliefs", "our beliefs"],
  //   ["/serve", "serve"],
  //   ["/videos", "videos"],
  //   ["/events", "events"],
  //   ["/gallery", "gallery"],
  //   ["/contact", "contact"],
  // ];

  // let routes = [];

  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-light">
      <div className="container g-0">
        {/* <div className="d-flex justify-content-center"> */}
        <div className="nav-title mx-auto">
          {/* <div className=""> */}
          <h2>
            HONESDALE <br/> COMMUNITY CHURCH
          </h2>
        </div>
        {/* </div> */}
        <div className="hamburger z-3 position-absolute top-0 end-0 mt-2">
          <button
            className="navbar-toggler collapsed ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            {menu.map((item) =>
              isDesktop ? (
                <li key={item.title} className="nav-item">
                  <Link href={item.path} className="nav-link">
                    {item.title}
                  </Link>
                </li>
              ) : (
                <li
                  key={item.title}
                  className="nav-item"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                >
                  <Link href={item.path} className="nav-link">
                    {item.title}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        {/* <div className="hidden md:float-left md:contents"> */}
        {/*   {menu.map((item) => ( */}
        {/*     <Link key={item.title} href={item.path}> */}
        {/*       <span */}
        {/*         className={`md:float-right mt-2 align-middle justify-self-end ml-4 cursor-pointer ${ */}
        {/*           router.pathname === item.path ? "text-teal" : "text-gray-500" */}
        {/*         }`} */}
        {/*       > */}
        {/*         {item.title} */}
        {/*       </span> */}
        {/*     </Link> */}
        {/*   ))} */}
        {/* </div> */}
        {/* Mobile Menu */}
        {/* <Hamburger onClick={handleClick} /> */}
        {/* <div */}
        {/*   className="expand col-start-3 col-span-3 */}
        {/*    justify-self-center md:hidden pt-2" */}
        {/*   style={{ height: transition }} */}
        {/* > */}
        {/*   <ul className="text-center text-lg"> */}
        {/*     {menu.map((item) => { */}
        {/*       return ( */}
        {/*         <Link key={item.title} href={item.path}> */}
        {/*           <li */}
        {/*             className={`cursor-pointer ${ */}
        {/*               router.pathname === item.path */}
        {/*                 ? "text-teal" */}
        {/*                 : "text-gray-500" */}
        {/*             }`} */}
        {/*           > */}
        {/*             {item.title} */}
        {/*           </li> */}
        {/*         </Link> */}
        {/*       ); */}
        {/*     })} */}
        {/*   </ul> */}
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Header;
