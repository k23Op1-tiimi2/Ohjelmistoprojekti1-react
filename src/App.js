import './App.css';
import Productlist from './Productlistapp';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <h1>O & R Store</h1>
      <Navbar />
      <Productlist />
    </div>
  );
}

export default App;
