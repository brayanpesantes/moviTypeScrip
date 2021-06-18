import React from "react";
import { Wrapper, Content, Text } from "./HeroImage.styled";

const HeroImage = (props: any) => {
  return (
    <Wrapper image={props.image}>
      <Content>
        <Text>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default HeroImage;
