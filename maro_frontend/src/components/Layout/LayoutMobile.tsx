import React from "react";
import HeaderMobile from "../Header/HeaderMobile";
import FooterMobile from "../Footer/FooterMobile";

interface LayoutMobileProps {
  children: React.ReactNode;
}

const LayoutMobile: React.FC<LayoutMobileProps> = ({ children }) => {
  return (
    <div className="site-wrapper">
      <HeaderMobile />
      <main>
        {children}
      </main>
      <FooterMobile />
    </div>
  );
};

export default LayoutMobile;
