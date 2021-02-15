import React, { useState, useContext, Fragment } from 'react';
import {BookContext} from '../../App/App';
import './Search.css';
const Search = () => {
  const {onSearch,searchTerm} = useContext(BookContext);
  console.log("search word from Search component: ",searchTerm);
  return(
    <Fragment>
      <input type = 'searchoo' value = {searchTerm} placeholder = 'Search' onChange = {(e) => onSearch(e.target.value)}/>
    </Fragment>
  )
}

export default Search;
