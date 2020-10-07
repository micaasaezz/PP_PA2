import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokeById } from '../../redux/ducks/pokeDuck';
import { useHistory, useParams } from 'react-router-dom';
import PokeRow from '../templates/PokeRow';

export default function Detalle() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const { poke } = useSelector(state => state);
  const { pokeInfo } = poke;
  let history = useHistory();

  useEffect(() => {
    dispatch(getPokeById(id));    
  }, [dispatch, id])

  const handleGoBack = () => history.goBack();

  return (
    <PokeRow 
      pokeInfo={pokeInfo}
      handleGoBack={handleGoBack}
    />    
  )
}
