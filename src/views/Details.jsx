import './App.css';
import Navbar from './components/Navbar';
import Search from "./components/Search";



function detail() {
  
  return (
  <div>
    <Navbar></Navbar>
    
    <Search search={Search}/>
    </div>
  );
}

export default detail;


