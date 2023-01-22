import './App.css';
import Home from './Pages/Home/Home'
import Navbar from "./Components/Navbar/Navbar";
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Footer />
    </div>
  );
}

export default App;
