import './App.css';
import Navbar from './components/Navbar';
import Search from "./components/Search";
import { useEffect } from 'react';
import { getAllPokemon } from './services/pokeservice';


function App() {
  useEffect(()=> {
    getAllPokemon().then(

      (response) => {
        console.log(response.data)
      }
    )
  })
  return (
  <div>
    <Navbar></Navbar>
    
    <Search search={Search}/>
    </div>
  );
}

export default App;


