import { useState, useEffect, useRef } from "react";
import Api from "../api/Api";
import { isPresistedState } from "../helpers";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useMovieFech = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setstate] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fechMovies = async (searchterm: string, page: number) => {
    try {
      setError(false);
      setIsLoading(true);
      const movies = await Api.fechMovies(searchterm, page);
      setstate((prev: any) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
      setIsLoading(false);
    } catch (err) {
      setError(true);
    }
  };
  //search initial
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPresistedState("homeState");
      if (sessionState) {
        setstate(sessionState);
        return;
      }
    }

    setstate(initialState);
    fechMovies(searchTerm, 1);
  }, [searchTerm]);

  useEffect(() => {
    if (!isLoadingMore) return;
    setIsLoadingMore(false);
    fechMovies(searchTerm, state.page + 1);
  }, [isLoadingMore, searchTerm, state.page]);

  //write sesionStorage
  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem("homeState", JSON.stringify(state));
  }, [searchTerm, state]);

  return {
    state: state,
    isLoading,
    error,
    setSearchTerm,
    searchTerm,
    setIsLoadingMore,
  };
};
