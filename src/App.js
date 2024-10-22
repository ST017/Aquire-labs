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
import PrivateRoute from "./Components/PrivateRoute";
import Dummyedit from "./Components/Dummyedit";
import EditProfile from "./Components/Dashboard/EditProfile";
 
 
 
 
 
function App() {
  return (
    <div>
     
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
         
         
          <Route path="/companydetails" element={<PrivateRoute><CompanyDetails/></PrivateRoute>}/>
          <Route path="/requestpage" element={<PrivateRoute><RequestPage/></PrivateRoute>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/price" element={<Pricing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/forgetpassword" element={<PrivateRoute><ForgetPassword/></PrivateRoute>}/>
          <Route path="/resetpassword" element={<PrivateRoute><ResetPassword/></PrivateRoute>}/>
          <Route path="/verificationemail" element={<PrivateRoute><VerificationEmail/></PrivateRoute>}/>
          <Route path="/dummy" element={<Dummyedit/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}
 
export default App;
 