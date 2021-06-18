import React, { FC } from "react";
import Thumb from "../Thumb";
import { Wrapper, Content, Text } from "./MovieInfo.styled";
import NOImage from "../../images/noImage.jpg";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

type PropsMovieInfo = {
  movie: object | undefined;
};

const MovieInfo: FC<PropsMovieInfo> = ({ movie }) => {
  return (
    <Wrapper backdrop={movie?.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie?.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie?.poster_path}`
              : NOImage
          }
          clickable={false}
        />
        <Text>
          <h1>{movie?.title}</h1>
          <h3>PLOT</h3>
          <p>{movie?.overview}</p>
          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie?.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR {movie?.directors.length > 1 ? "S" : ""}</h3>
              {movie?.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;
