import React from "react";
import { Wrapper, Content } from "./Grid.styled";
const Grid = ({ header, children }: any) => {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Grid;
