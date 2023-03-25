import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterLogo from "../public/hcc-new-logo_3.webp";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="">
      {/* <Image */}
      {/*   src={FooterLogo} */}
      {/*   className="img-fluid gx-0 d-block mx-auto footer-image" */}
      {/*   alt="Honesdale Community Church Logo" */}
      {/*   width="715" */}
      {/*   height="209" */}
      {/* /> */}
      <footer className="footer pt-3">
        <div className="container">
          <div className="row mb-5 text-center">
            <div className="col-md-4">
              <div className="site-logo">
                {/* <a href="#">Honesdale Community Church</a> */}
                <h3>honesdale community church</h3>
              </div>
            </div>
            <div className="col-md-8 text-md-right">
              <ul className="social-icons">
                <li>
                  <a href="#" className="fb">
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a href="#" className="tw">
                    <FaYoutube style={{ color: "#FF0000" }} />
                  </a>
                </li>
                <li>
                  <a href="#" className="in">
                    <IoMailOutline />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mb-5">
            {/* <div className="col-md-6 "> */}
            {/*   <ul className="nav-links list-unstyled nav-left"> */}
            {/*     <li> */}
            {/*       <a href="#">Privacy</a> */}
            {/*     </li> */}
            {/*     <li> */}
            {/*       <a href="#">Policy</a> */}
            {/*     </li> */}
            {/*   </ul> */}
            {/* </div> */}
            <div className="col-md-6 text-center text-md-right">
              <ul className="nav-links nav-right">
                <li className="footer-links">
                  {/* <a href="#">home</a> */}
                  <Link href="/">home</Link>
                </li>
                <li className="footer-links">
                  {/* <a href="#">our beliefs</a> */}
                  <Link href="/our-beliefs">our beliefs</Link>
                </li>
                <li className="footer-links">
                  {/* <a href="#">videos</a> */}
                  <Link href="/videos">videos</Link>
                </li>
                <li className="footer-links">
                  {/* <a href="#">events</a> */}
                  <Link href="/events">events</Link>
                </li>
                <li className="footer-links">
                  {/* <a href="#">contact</a> */}
                  <Link href="contact">contact</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div class="row"> */}
          {/*   <div class="col "> */}
          {/*     <div class="copyright"> */}
          {/*       <p> */}
          {/*         <small>Copyright 2019. All Rights Reserved.</small> */}
          {/*       </p> */}
          {/*     </div> */}
          {/*   </div> */}
          {/* </div> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
