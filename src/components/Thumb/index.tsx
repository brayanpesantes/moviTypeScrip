import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Image } from "./Thumb.styled";

type PropsThumb = {
  image: string;
  movieId?: number;
  clickable: boolean;
};

const Thumb: FC<PropsThumb> = ({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movied-tumb" />
        </Link>
      ) : (
        <Image src={image} alt="movied-tumb" />
      )}
    </div>
  );
};

export default Thumb;
