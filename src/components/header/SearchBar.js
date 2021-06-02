import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const SearchBar = () => {
  return (
    <>
      <SearchWrapper>
        <Searchbar>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form>
            <input type="text" />
          </form>
        </Searchbar>
      </SearchWrapper>
    </>
  );
};

const SearchWrapper = styled.div`
  flex: 1;
`;

const Searchbar = styled.div`
  background-color: #e9e9e9;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;
  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
  }

  form > button {
    display: none;
  }

  input:focus {
    outline: none;
  }
`;

export default SearchBar;
