
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";

import ResetPassword from "./Components/ResetPassword";
import Dashboard from "./Components/Dashboard/Dashboard";
import EditProfile from "./Components/Dashboard/EditProfile";
import CompanyDetails from "./Components/ComapanyDetails";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/resetpassword" element={<ResetPassword/>}/>
          <Route path="/editprofile" element={<EditProfile/>}/>
          <Route path="/companydetails" element={<CompanyDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
