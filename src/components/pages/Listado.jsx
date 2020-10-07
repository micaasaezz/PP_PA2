import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/ducks/appDuck";
import { useSelector } from "react-redux";
import PokeList from '../templates/PokeList';

export default function Listado() {
  const dispatch = useDispatch();
  const { app } = useSelector(state => state);
  const { pokemons, count, next, previous } = app;
  const [ rowsPerPage, setRowsPerPage ] = useState(10);
  let [ defaultUrl, setDefaultUrl] = useState('https://pokeapi.co/api/v2/pokemon/');


  useEffect(() => {
    // dispatch(loadingApp());
    // setInterval(() => {
    //   dispatch(loadedApp(false, false, null));
    // }, 2500);
    dispatch(getPokemons(defaultUrl, rowsPerPage));
      
  }, [defaultUrl, dispatch, rowsPerPage])
    
  const handleOnClick = (url) => {
    dispatch(getPokemons(url, rowsPerPage));
    setDefaultUrl(url);
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    dispatch(getPokemons(defaultUrl, event.target.value));
  }
  
  return (
    <PokeList 
      pokemons={pokemons}
      previous={previous}      
      next={next}      
      count={count}      
      handleOnClick={handleOnClick}
      rowsPerPage={rowsPerPage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
    />
  )
}
