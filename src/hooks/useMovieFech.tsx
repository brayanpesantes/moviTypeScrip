import React, { useState, useEffect, useCallback } from "react";
import Api from "../api/Api";
import { isPresistedState } from "../helpers";

export const useMovieFech = (moviId: string | number) => {
  const [state, setstate] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const movie = await Api.fechMovie(moviId);
      const credits = await Api.fetchCredits(moviId);
      const directors = credits.crew.filter(
        (member: any) => member.job === "Director"
      );
      setstate({
        ...movie,
        actors: credits.cast,
        directors,
      });
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, [moviId]);

  useEffect(() => {
    const sesionState = isPresistedState(`${moviId}`);
    if (sesionState) {
      setstate(sesionState);
      setLoading(false);
      return;
    }
    fetchData();
  }, [moviId]);

  //write to sesionStorage
  useEffect(() => {
    sessionStorage.setItem(`${moviId}`, JSON.stringify(state));
  }, [moviId, state]);

  return { state, loading, error };
};
