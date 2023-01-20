import "./App.css";
import ProductPage from "./Page/ProductPage";
import './App.css';
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import MainRoutes from "./Components/MainRoutes";
import { Link } from "react-router-dom";




function App() {
     return (
          <div className="App">
               {/* <ProductPage /> */}
               <MainRoutes/>
               <button><Link to="Signup">Signup</Link></button>
          </div>
     );
}

export default App;
