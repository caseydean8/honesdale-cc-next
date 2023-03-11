import React from "react";
import Image from "next/image"
import FooterLogo from "../public/hcc-new-logo_3.webp";

const Footer = () => {
  return (
    <div className="footer">
      <Image
        src={FooterLogo}
        className="img-fluid gx-0 d-block mx-auto footer-image"
        alt="Honesdale Community Church Logo"
        width="715"
        height="209"
      />
    </div>
  );
};

export default Footer;
