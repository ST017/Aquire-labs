
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";

import ResetPassword from "./Components/ResetPassword";
import Dashboard from "./Components/Dashboard/Dashboard";

import CompanyDetails from "./Components/ComapanyDetails";
import RequestPage from "./Components/Request/RequestPage";
import Faq from "./Components/Faq";




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
          
          <Route path="/companydetails" element={<CompanyDetails/>}/>
          <Route path="/requestpage" element={<RequestPage/>}/>
          <Route path="/faq" element={<Faq/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
