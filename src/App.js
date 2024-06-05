// import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Search from "./components/Search";
import Card from "./components/Card";
import { getAllPokemon } from './services/pokeservice';


function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(()=> {
    getAllPokemon()
    .then((response) => {
        setPokemons(response.data.results)
        // console.log(response.data)
      }
    )
    .catch((error) => {
      console.error(error);
    });
  })

  // useEffect(()=> {

  //   const getPokemon = async (pokemon) => {
  //     const res = await axios.get("api/v1/pokemon")
  //     console.log(res.data.results)

  //   }}, [])


  console.log(pokemons)
  return (
    <div>
    <Navbar></Navbar>
    <h1 className="text-primary text-center">Liste des pokemon</h1>
    <div id="home">
      {pokemons.map((pokemon) => {
        return  <Card  key={pokemon.id} pokemon = {pokemon}/>

      })}
    </div>
    
    <Search search={Search}/>
    </div>
  );
}

export default App;


