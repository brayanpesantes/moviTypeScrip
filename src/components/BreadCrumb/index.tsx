import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./BreadCrumb.styled";

type PropsBreandCrumb = {
  movieTile: string;
};
const BreadCrumb: React.FC<PropsBreandCrumb> = ({ movieTile }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{movieTile}</span>
      </Content>
    </Wrapper>
  );
};

export default BreadCrumb;
