// import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Login  } from "./Login";
// import { Register } from "./Register";
import './App.css'
// import Users from "./components/Users";
import Pets from './components/Pets';

function App() {
  return (
    <div className="App">
    <div className="sub-main">
      {/* < Login/> */}
      {/* < Users /> */}
      < Pets />



      {/* <Route path="/" element={<Login />} />
      <Route path="/" element={<Register />} /> */}
    </div>
    </div>
  );
}

export default App;
