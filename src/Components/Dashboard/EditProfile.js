import React, { useEffect, useState } from "react";
import "./EditProfile.css";
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from '../Firebase/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { CategoryList, EcosystemsList, FundingStageList, LocationList } from "./Filterlists";
import { sassTrue } from "sass";
import { toast, ToastContainer } from "react-toastify";
const EditProfile = () => {
    
    const [userProject, setUserProject] = useState([]);
    
    const [userDetail, setUserDetail] = useState(null); // Store user details separately

    const [currentUser, setCurrentUser] = useState(null);

    //Form States
    const [projectName, setProjectName] = useState(userProject.name);
    const [website, setWebsite] = useState(userProject.website);
    const [location, setLocation] = useState("");
    const [fundingStage, setFundingStage] = useState(userProject.fundingStatus);
    const [partnership, setPartnership] = useState(userProject.category);
    const [ecosystem, setEcosystem] = useState(userProject.blockchain);
    const [bioData, setBioData] = useState("");
    const [whitepaper, setWhitepaper] = useState(userProject.whitepaper);
    const [githubLink, setGithubLink] = useState("");
    const [projectStatement, setProjectStatement] = useState(userProject.descr);
    const [coverPicture, setCoverPicture] = useState(null);
    const [profilePicture, setProfilePicture] = useState(null);

    const [isProfileEditing,setIsProfileEditing]=useState(false)
  

  useEffect(() => {
    const auth = getAuth();
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      }
      
    });
    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);
  
  // Fetch all required data
  const fetchData = async () => {
    if (!currentUser) return;

    try {
      // Fetch User Data
      const userQuery = query(collection(db, "User"), where("id", "==", currentUser.uid));
      const userQuerySnapshot = await getDocs(userQuery);
      if (userQuerySnapshot.empty) {
        console.error("No user found");
        return;
      }
      const userDetail = userQuerySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))[0]; // Get the first document
      setUserDetail(userDetail);

      // Fetch User Projects
      const userProjectQuery = query(collection(db, "UserProject"), where("userId", "==", currentUser.uid));
      const userProjectQuerySnapshot = await getDocs(userProjectQuery);
      const userProjectd = userProjectQuerySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserProject(userProjectd[0]);

      

   
      
    } catch (error) {
      console.error(error);
    } 
  };

  useEffect(() => {
    fetchData();
    
  }, [currentUser]); // Re-fetch data when User changes

  


   const handleSave= async()=>{
    try {
        console.log("handlesave is working")
        const docRef = doc(db, "UserProject", currentUser.uid);
        await updateDoc(docRef, {
          name: projectName,
          website: website,
          country: location,
          fundingStatus: fundingStage,
          category: partnership,
          blockchain: ecosystem,
         
          whitepaper: whitepaper,
          
          descr: projectStatement,
          
        });
        toast("Profile updated successfully!",{position:"top-center"});
      } catch (error) {
        console.error("Error updating profile: ", error);
      }

   }

   const handleEdit=()=>{
    setProjectName(userProject.name)
    setWebsite(userProject.website)
    
    setFundingStage(userProject.fundingStatus)
    setPartnership(userProject.category)
    setEcosystem(userProject.blockchain)
    
    setWhitepaper(userProject.whitepaper)
    
    setProjectStatement(userProject.descr)
    setIsProfileEditing(true)
    
   }




  
  if(!isProfileEditing){
    return (
        <div className="edit-profile"> 
        {console.log("userProject",userProject.id)} {console.log("cuurentuser",currentUser)}
          <h2>Edit Profile</h2>
          
            <div className="form-row">
              <div className="form-group">
                <label>Project Name *</label>
                <input
                  type="text"
                  name="projectName"
                  value={userProject.name}
                  onChange={(e)=>setProjectName(e.target.value)}
                  required
                />
              </div>
    
              <div className="form-group">
                <label>Website *</label>
                <input
                  type="url"
                  name="website"
                  value={userProject.website}
                  onChange={(e)=>setWebsite(e.target.value)}
                  required
                />
              </div>
            </div>
    
            <div className="form-row">
              <div className="form-group">
                <label>Location</label>
                <select
                  name="location"
                  value={userProject.country}
                  onChange={(e)=>setLocation(e.target.value)}
                >
                  {LocationList.map((ele,i)=>{
                    return <option value={ele}>{ele}</option>
                  })}
                </select>
              </div>
    
              <div className="form-group">
                <label>Funding Stage</label>
                <select
                  name="fundingStage"
                  value={userProject.fundingStatus}
                  onChange={(e)=>setFundingStage(e.target.value)}
                >
                  {FundingStageList.map((ele,i)=>{
                    return <option value={ele}>{ele}</option>
                  })}
                </select>
              </div>
            </div>
    
            <div className="form-row">
              <div className="form-group">
                <label>Partnership Interests</label>
                <select
                  name="partnership"
                  value={userProject.category}
                  onChange={(e)=>setPartnership(e.target.value)}
                > 
                  
                  {CategoryList.map((ele,i)=>{
                    return <option value={ele}>{ele}</option>
                  })}
                </select>
              </div>
    
              <div className="form-group">
                <label>Ecosystem</label>
                <select
                  name="ecosystem"
                  value={userProject.blockchain}
                  onChange={(e)=>setEcosystem(e.target.value)}
                >
                  {EcosystemsList.map((ele,i)=>{
                    return <option value={ele}>{ele}</option>
                  })}
                </select>
              </div>
            </div>
    
            <div className="form-group">
              <label>Bio Data *</label>
              <textarea
                name="bioData"
                value=""
                onChange={(e)=>setBioData(e.target.value)}
                required
              />
            </div>
    
            <div className="form-group">
              <label>Whitepaper</label>
              <input
                type="text"
                name="whitepaper"
                value={userProject.whitepaper}
                onChange={(e)=>setWhitepaper(e.target.value)}
              />
            </div>
    
            <div className="form-group">
              <label>Github Link</label>
              <input
                type="url"
                name="githubLink"
                value=""
                onChange={(e)=>setGithubLink(e.target.value)}
              />
            </div>
    
            <div className="form-group">
              <label>Statement for projects *</label>
              <textarea
                name="projectStatement"
                value={userProject.descr}
                onChange={(e)=>setProjectStatement(e.target.value)}
                required
              />
            </div>
    
            <div className="form-group file-input">
              <label>Cover picture</label>
              <input
                type="file"
                name="coverPicture"
                placeholder="JPG, PNG or PDF, file size no more than 10MB"
                accept=".jpg,.png,.pdf"
              />
              
            </div>
    
            <div className="form-group file-input">
              <label>Profile picture</label>
              <input
                type="file"
                name="profilePicture"
                placeholder="JPG, PNG or PDF, file size no more than 10MB"
                accept=".jpg,.png,.pdf"
              />
              
            </div>
    
            <div className="form-actions">
              <button type="button" className="cancel-btn">
                Cancel
              </button>
              <button onClick={handleEdit} className="save-btn">
                Edit
              </button>
            </div>
            <ToastContainer/> 
        </div>
      );
  }else{
    return (
        <div className="edit-profile"> 
          <h2>Edit Profile</h2>
          
            <div className="form-row">
              <div className="form-group">
                <label>Project Name *</label>
                <input
                  type="text"
                  name="projectName"
                  value={projectName}
                  onChange={(e)=>setProjectName(e.target.value)}
                  required
                />
              </div>
    
              <div className="form-group">
                <label>Website *</label>
                <input
                  type="url"
                  name="website"
                  value={website}
                  onChange={(e)=>setWebsite(e.target.value)}
                  required
                />
              </div>
            </div>
    
            <div className="form-row">
              <div className="form-group">
                <label>Location</label>
                <select
                  name="location"
                  value={location}
                  onChange={(e)=>setLocation(e.target.value)}
                >
                  {LocationList.map((ele,i)=>{
                    return <option value={ele}>{ele}</option>
                  })}
                </select>
              </div>
    
              <div className="form-group">
                <label>Funding Stage</label>
                <select
                  name="fundingStage"
                  value={fundingStage}
                  onChange={(e)=>setFundingStage(e.target.value)}
                >
                  {FundingStageList.map((ele,i)=>{
                    return <option value={ele}>{ele}</option>
                  })}
                </select>
              </div>
            </div>
    
            <div className="form-row">
              <div className="form-group">
                <label>Partnership Interests</label>
                <select
                  name="partnership"
                  value={partnership}
                  onChange={(e)=>setPartnership(e.target.value)}
                >
                  {CategoryList.map((ele,i)=>{
                    return <option value={ele}>{ele}</option>
                  })}
                </select>
              </div>
    
              <div className="form-group">
                <label>Ecosystem</label>
                <select
                  name="ecosystem"
                  value={ecosystem}
                  onChange={(e)=>setEcosystem(e.target.value)}
                >
                  {EcosystemsList.map((ele,i)=>{
                    return <option value={ele}>{ele}</option>
                  })}
                </select>
              </div>
            </div>
    
            <div className="form-group">
              <label>Bio Data *</label>
              <textarea
                name="bioData"
                value=""
                onChange={(e)=>setBioData(e.target.value)}
                required
              />
            </div>
    
            <div className="form-group">
              <label>Whitepaper</label>
              <input
                type="text"
                name="whitepaper"
                value={whitepaper}
                onChange={(e)=>setWhitepaper(e.target.value)}
              />
            </div>
    
            <div className="form-group">
              <label>Github Link</label>
              <input
                type="url"
                name="githubLink"
                value=""
                onChange={(e)=>setGithubLink(e.target.value)}
              />
            </div>
    
            <div className="form-group">
              <label>Statement for projects *</label>
              <textarea
                name="projectStatement"
                value={projectStatement}
                onChange={(e)=>setProjectStatement(e.target.value)}
                required
              />
            </div>
    
            <div className="form-group file-input">
              <label>Cover picture</label>
              <input
                type="file"
                name="coverPicture"
                placeholder="JPG, PNG or PDF, file size no more than 10MB"
                accept=".jpg,.png,.pdf"
              />
             
            </div>
    
            <div className="form-group file-input">
              <label>Profile picture</label>
              <input
                type="file"
                name="profilePicture"
                placeholder="JPG, PNG or PDF, file size no more than 10MB"
                accept=".jpg,.png,.pdf"
              />
              
            </div>
    
            <div className="form-actions">
              <button type="button" className="cancel-btn">
                Cancel
              </button>
              <button onClick={handleSave} className="save-btn">
                Save
              </button>
            </div>
            
        <ToastContainer/>
        </div>
        
      );
  }

  
};

export default EditProfile;
