import React, { useEffect, useState } from "react";
import "./EditProfile.css";
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../Firebase/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { CategoryList, EcosystemsList, FundingStageList, LocationList } from "./Filterlists";
import { sassTrue } from "sass";
import { toast, ToastContainer } from "react-toastify";
const EditProfile = ({setIsEditProfile}) => {
  const [userProject, setUserProject] = useState([]);
  const [userDetail, setUserDetail] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  // Form States
  const [projectName, setProjectName] = useState(userProject.name);
  const [website, setWebsite] = useState(userProject.website);
  const [location, setLocation] = useState(null);
  const [fundingStage, setFundingStage] = useState(userProject.fundingStatus);
  const [partnership, setPartnership] = useState(userProject.category);
  const [ecosystem, setEcosystem] = useState(userProject.blockchain);
  const [bioData, setBioData] = useState(userProject.biodata || "");
  const [whitepaper, setWhitepaper] = useState(userProject.whitepaper);
  const [githubLink, setGithubLink] = useState(userProject.githubLink || "");
  const [projectStatement, setProjectStatement] = useState(userProject.descr);
  const [coverPicture, setCoverPicture] = useState(null); // Holds the file for cover picture
  const [profilePicture, setProfilePicture] = useState(null); // Holds the file for profile picture

  const [isProfileEditing, setIsProfileEditing] = useState(false);

  const storage = getStorage();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
    return () => unsubscribe();
  }, []);

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
  }, [currentUser]);

  // File change handlers
  const handleCoverPictureChange = (e) => {
    const file = e.target.files[0];
  if (file && file.size <= 10 * 1024 * 1024) { // Check if file size is within the 10MB limit
    setCoverPicture(file);
  } else {
    toast.error("File size exceeds 10MB limit.");
  }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
  if (file && file.size <= 10 * 1024 * 1024) { // Check if file size is within the 10MB limit
    setProfilePicture(file);
  } else {
    toast.error("File size exceeds 10MB limit.");
  }
    
  };

  const uploadFile = async (file, folder) => {
    
          if (!file) return null;

        const fileRef = ref(storage, `${folder}/${currentUser.uid}/${file.name}`);
        await uploadBytes(fileRef, file);
        const fileURL = await getDownloadURL(fileRef);
        return fileURL;
  
  
}
   
   

  /* const handleSave = async () => {
    if ((coverPicture && coverPicture.size > 10 * 1024 * 1024) 
    ) {
  toast.error("One or more files exceed the 10MB size limit.");
  return; // Stop the process if validation fails
}
if (
    (profilePicture && profilePicture.size > 10 * 1024 * 1024)) {
  toast.error("One or more files exceed the 10MB size limit.");
  return; // Stop the process if validation fails
}

    try {
      
      

  // Proceed with uploading if files are valid or empty
  const coverPictureURL = coverPicture ? await uploadFile(coverPicture, 'coverPictures') : null;
  const profilePictureURL = profilePicture ? await uploadFile(profilePicture, 'profilePictures') : null;

      // const coverPictureURL = await uploadFile(coverPicture, 'coverPictures');
      // const profilePictureURL = await uploadFile(profilePicture, 'profilePictures');


      const docRef = doc(db, "UserProject", userProject.id);
      await updateDoc(docRef, {
        name: projectName,
        website: website,
        country: location,
        fundingStatus: fundingStage,
        category: partnership,
        blockchain: ecosystem,
        whitepaper: whitepaper,
        descr: projectStatement,
        biodata: bioData || userProject.biodata,
        githubLink:githubLink || userProject.githublink,
        location:location || userProject.location,
        coverPicture: coverPictureURL || userProject.coverPicture,  // Store URL in Firestore
        profilePicture: profilePictureURL || userProject.profilePicture,  // Store URL in Firestore
      });
      toast.success("Profile updated successfully!",{position:"top-center"});
    } catch (error) {
        toast.error(error,{position:"top-center"})
      console.error("Error updating profile: ", error);
    }
  }; */

  /* const handleSave = async () => {
    // Check file sizes before proceeding
    if ((coverPicture && coverPicture.size > 10 * 1024 * 1024) || (profilePicture && profilePicture.size > 10 * 1024 * 1024)) {
      toast.error("One or more files exceed the 10MB size limit.");
      return;
    }
  
    try {
      // Upload files if present
      const coverPictureURL = coverPicture ? await uploadFile(coverPicture, 'coverPictures') : null;
      const profilePictureURL = profilePicture ? await uploadFile(profilePicture, 'profilePictures') : null;
  
      const docRef = doc(db, "UserProject", userProject.id);
      
      // Prepare the fields to update, conditionally excluding null values
      const updatedData = {
        name: projectName,
        website: website,
        country: location || userProject.country,
        fundingStatus: fundingStage,
        category: partnership,
        blockchain: ecosystem,
        whitepaper: whitepaper,
        descr: projectStatement,
        biodata: bioData || userProject.biodata,
        coverPicture: coverPictureURL || userProject.coverPicture,
        profilePicture: profilePictureURL || userProject.profilePicture,
      };
  
      // Only include githubLink if it's not null or an empty string
      if (githubLink !== null && githubLink !== "") {
        updatedData.githubLink = githubLink;
      }
  
      await updateDoc(docRef, updatedData);
      toast.success("Profile updated successfully!", { position: "top-center" });
    } catch (error) {
      toast.error("Error updating profile: " + error, { position: "top-center" });
      console.error("Error updating profile: ", error);
    }
  }; */

  const handleSave = async () => {
    // Check file sizes before proceeding
    if ((coverPicture && coverPicture.size > 10 * 1024 * 1024) || (profilePicture && profilePicture.size > 10 * 1024 * 1024)) {
      toast.error("One or more files exceed the 10MB size limit.");
      return;
    }
  
    try {
      // Upload files if present
      const coverPictureURL = coverPicture ? await uploadFile(coverPicture, 'coverPictures') : null;
      const profilePictureURL = profilePicture ? await uploadFile(profilePicture, 'profilePictures') : null;
  
      const docRef = doc(db, "UserProject", userProject.id);
      
      // Prepare the fields to update, allowing githubLink to be null or empty
      const updatedData = {
        name: projectName,
        website: website,
        country: location || userProject.country,
        fundingStatus: fundingStage,
        category: partnership,
        blockchain: ecosystem,
        whitepaper: whitepaper,
        descr: projectStatement,
        biodata: bioData || userProject.biodata,
        coverPicture: coverPictureURL || userProject.coverPicture,
        profilePicture: profilePictureURL || userProject.profilePicture,
        githubLink: githubLink || null,  // Explicitly set githubLink to null if it's empty
      };
  
      await updateDoc(docRef, updatedData);

      const docRefUser = doc(db, "User", currentUser.uid);
      
      // Prepare the fields to update, allowing githubLink to be null or empty
      const updatedUserData = {
        
        profilePicture: profilePictureURL || userDetail.profilePicture,
        
      };
      await updateDoc(docRefUser, updatedUserData);



      toast.success("Profile updated successfully!", { position: "top-center" });
      setIsEditProfile(false)
    } catch (error) {
      toast.error("Error updating profile: " + error, { position: "top-center" });
      console.error("Error updating profile: ", error);
    }
  };
  
  

  const handleEdit = () => {
    setProjectName(userProject.name);
    setWebsite(userProject.website);
    setFundingStage(userProject.fundingStatus);
    setPartnership(userProject.category);
    setEcosystem(userProject.blockchain);
    setWhitepaper(userProject.whitepaper);
    setProjectStatement(userProject.descr);
    setBioData(userProject.bioData || "")
    setLocation(userProject.location)
    setGithubLink(userProject.githubLink || "")
    setIsProfileEditing(true);
  };


  
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
                value={userProject.bioData || ""}
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
                value={userProject.githubLink || ""}
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
                
                disabled
              />
              
            </div>
    
            <div className="form-group file-input">
              <label>Profile picture</label>
              <input
                type="file"
                name="profilePicture"
                placeholder="JPG, PNG or PDF, file size no more than 10MB"
                
                disabled
              />
              
            </div>
    
            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={()=>setIsEditProfile(false)}>
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
                value={bioData}
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
                value={githubLink}
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
                onChange={handleCoverPictureChange}

              />
             
            </div>
    
            <div className="form-group file-input">
              <label>Profile picture</label>
              <input
                type="file"
                name="profilePicture"
                placeholder="JPG, PNG or PDF, file size no more than 10MB"
                accept=".jpg,.png,.pdf"
                onChange={handleProfilePictureChange}
              />
              
            </div>
    
            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={()=>setIsEditProfile(false)} >
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
