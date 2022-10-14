import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokemonListApiCall } from './redux/actionContainer/actionCreators/pokemonListActionCreator';
import HomeScreen from './Screens/HomeScreen';

function App() {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchPokemonListApiCall())
  }, [])

  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
