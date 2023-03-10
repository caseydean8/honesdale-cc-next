import React from "react";
import Image from "next/image"
import FooterLogo from "../public/hcc-new-logo_3.jpg";

const Footer = () => {
  return (
    <div>
      <Image
        src={FooterLogo}
        className="img-fluid gx-0"
        alt="Honesdale Community Church Logo"
        width="715"
        height="209"
      />
    </div>
  );
};

export default Footer;
