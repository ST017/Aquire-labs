
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
