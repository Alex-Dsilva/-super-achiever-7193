import './App.css';
import MainRoutes from './Pages/MainRoutes'
import Navbar from "./Components/Navbar/Navbar";
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes/> 
      <Footer />
    </div>
  );
}

export default App;
