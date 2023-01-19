import "./App.css";
// import ProductPage from "./Page/ProductPage";
import './App.css';
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";



function App() {
     return (
          <div className="App">
               {/* <ProductPage /> */}
               <Signin/>
               {/* <Signup/> */}
          </div>
     );
}

export default App;
