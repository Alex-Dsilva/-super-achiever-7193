import './App.css';
import Footer from './Components/Footer/Footer';
import { Categories } from './Components/Navbar/Categries';
import Navbar from './Components/Navbar/navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
