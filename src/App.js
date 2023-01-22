import "./App.css";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import MainRoutes from "./Pages/MainRoutes";

function App() {
     return (
          <div className="App">
               <Navbar />
               <MainRoutes />
               <Footer />
          </div>
     );
}

export default App;
