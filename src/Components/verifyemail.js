import { useEffect } from 'react';
import { getAuth, applyActionCode } from 'firebase/auth';

const VerifyEmailPage = () => {
  const auth = getAuth();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const oobCode = urlParams.get('oobCode'); // Get verification code from URL

    if (oobCode) {
      applyActionCode(auth, oobCode)
        .then(() => {
          toast.success("Email verified successfully!", { position: "top-center" });

          // Open a new tab after verification is successful
          const newTab = window.open(`${window.location.origin}/login`, '_blank');
          newTab.focus();
        })
        .catch((error) => {
          toast.error("Failed to verify email.", { position: "top-center" });
        });
    }
  }, []);

  return (
    <div>
      <h2>Verifying your email...</h2>
    </div>
  );
};

export default VerifyEmailPage;
