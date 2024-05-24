import './App.css';
import Navbar from './components/Navbar';
import Search from "./components/Search";



function fav() {
  
  return (
  <div>
    <Navbar></Navbar>
    
    <Search search={Search}/>
    </div>
  );
}

export default fav;


