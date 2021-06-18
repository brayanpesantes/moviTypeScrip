import React, { FC } from "react";
import { Wrapper } from "./Button.styled";

type PropsButton = {
  text: string;
  callback: (isMore: boolean) => void;
};
const Button: FC<PropsButton> = ({ text, callback }) => {
  return (
    <Wrapper type="button" onClick={() => callback(true)}>
      {text}
    </Wrapper>
  );
};

export default Button;
