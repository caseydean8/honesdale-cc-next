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
                  <Link
                    href="https://www.facebook.com/HonesdaleCommunityChurch"
                    className="fb"
                  >
                    <FaFacebookSquare />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/channel/UC2KX862afQKX4qc6ryGKQVA"
                    className="tw"
                  >
                    <FaYoutube style={{ color: "#FF0000" }} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:honesdalecc@honesdalecc.org"
                    className="in"
                  >
                    <IoMailOutline />
                  </Link>
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
                <li>
                  <Link href="/" className="footer-links">
                    home
                  </Link>
                </li>
                <li>
                  <Link href="/our-beliefs" className="footer-links">
                    our beliefs
                  </Link>
                </li>
                <li>
                  <Link href="/videos" className="footer-links">
                    videos
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="footer-links">
                    events
                  </Link>
                </li>
                <li>
                  <Link href="contact" className="footer-links">
                    contact
                  </Link>
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
