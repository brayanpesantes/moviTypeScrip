import React, { useEffect, useState } from "react";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL, API_KEY } from "../config";
//hooks
import { useMovieFech } from "../hooks/useHomeFech";
//components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";
//router
import { Outlet } from "react-router-dom";

//imagenes
import noImage from "../images/noImage.jpg";

const Home = () => {
  const {
    state,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  } = useMovieFech();
  if (error) {
    return <div>Something wen wrong ...</div>;
  }
  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[1].backdrop_path}`}
          title={state.results[1].original_title}
          text={state.results[1].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />

      <Grid header={setSearchTerm ? "Search Result" : "Popular Movis"}>
        {state.results?.map((movie) => (
          <Thumb
            key={movie.id}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : noImage
            }
            clickable
            movieId={movie.id}
          />
        ))}
      </Grid>
      {isLoading && <Spinner />}
      {state.page < state.total_pages && !isLoading && (
        <Button text="Load More" callback={setIsLoadingMore} />
      )}
      {console.log(isLoading)}
    </>
  );
};

export default Home;
