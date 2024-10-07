
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";


import Dashboard from "./Components/Dashboard/Dashboard";

import CompanyDetails from "./Components/ComapanyDetails";
import RequestPage from "./Components/Request/RequestPage";
import Faq from "./Components/Faq";
import Pricing from "./Components/Pricing";
import About from "./Components/About";
import ForgetPassword from "./Components/ForgetPassword";
import ResetPassword from "./ResetPassword";
import VerificationEmail from "./Components/VerificationEmail";





function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          
          
          <Route path="/companydetails" element={<CompanyDetails/>}/>
          <Route path="/requestpage" element={<RequestPage/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/price" element={<Pricing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/forgetpassword" element={<ForgetPassword/>}/>
          <Route path="/resetpassword" element={<ResetPassword/>}/>
          <Route path="/verificationemail" element={<VerificationEmail/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
