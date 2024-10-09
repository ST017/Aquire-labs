import { useEffect } from 'react';
import { getAuth, applyActionCode, onAuthStateChanged } from 'firebase/auth';
import { toast } from 'react-toastify'; // Assuming you are using react-toastify for notifications
 
const VerifyEmailPage = () => {
  const auth = getAuth();
 
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const oobCode = urlParams.get('oobCode'); // Get verification code from URL
 
    // Check for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        console.log("User logged in:", user);
      } else {
        // User is logged out
        console.log("User is logged out");
      }
    });
 
    if (oobCode) {
      applyActionCode(auth, oobCode)
        .then(() => {
          toast.success("Email verified successfully!", { position: "top-center" });
          console.log(auth);
          // Open a new tab after verification is successful
          const newTab = window.open(`${window.location.origin}/login`, '_blank');
          newTab.focus();
        })
        .catch((error) => {
          toast.error("Failed to verify email.", { position: "top-center" });
        });
    }
 
    // Clean up the onAuthStateChanged listener when component unmounts
    return () => unsubscribe();
  }, [auth]);
 
  return (
    <div>
      <h2>Verifying your email...</h2>
    </div>
  );
};
 
export default VerifyEmailPage;