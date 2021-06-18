import React from "react";
import { Link } from "react-router-dom";
import MDBLogo from "./../../images/imdb-brands.svg";
import RMDBLogo from "./../../images/mdb-brands.svg";

import { Wraper, Content, MDBLogoImage, TMDLogoImage } from "./header.styled";

const Header = () => {
  return (
    <Wraper>
      <Content>
        <Link to="/">
          <MDBLogoImage src={RMDBLogo} alt="mdb-logo" />
        </Link>
        <TMDLogoImage src={MDBLogo} alt="tmdb-logo" />
      </Content>
    </Wraper>
  );
};

export default Header;
