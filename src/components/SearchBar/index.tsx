import React, { useState, useEffect, useRef, FC } from "react";
import { Wrapper, Content } from "./SearchBar.styled";

import searchIcon from "../../images/search-solid.svg";

type PropsSearchBar = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: FC<PropsSearchBar> = ({ setSearchTerm }) => {
  const [state, setstate] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setstate(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
