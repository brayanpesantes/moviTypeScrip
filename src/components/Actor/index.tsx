import React from "react";
import { Wrapper, Image } from "./Actor.styled";

type PropsActor = {
  name: string;
  character: string;
  imageUrl: string;
};
const Actor: React.FC<PropsActor> = ({ name, character, imageUrl }) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
};

export default Actor;
