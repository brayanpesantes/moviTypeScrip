import React from "react";
import { Wrapper, Content } from "./MovieInfoBar.styled";

import { calcTime, convertMoney } from "../../helpers";

type PropsMovieInfoBar = {
  time: number;
  budget: number;
  revenue: number;
};
const MovieInfoBar: React.FC<PropsMovieInfoBar> = ({
  time,
  budget,
  revenue,
}) => {
  return (
    <Wrapper>
      <Content>
        <div className="column">
          <p>Running time: {calcTime(time)}</p>
        </div>
        <div className="column">
          <p>Running time: {convertMoney(budget)}</p>
        </div>
        <div className="column">
          <p>Running time: {convertMoney(revenue)}</p>
        </div>
      </Content>
    </Wrapper>
  );
};

export default MovieInfoBar;
