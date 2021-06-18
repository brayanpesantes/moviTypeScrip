import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { GlobalStyled } from "./GlobalStyled";
import Header from "./components/Header";
import Home from "./components/Home";
//Riuting
import NotFound from "./components/NotFound";
import Movie from "./components/Movie";

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyled />
    </div>
  );
};

export default App;
