import styles from "./Register.module.scss";
import { Kyc, Register } from "../../components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCaptured, setIsCaptured] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleSubmitted = (isFilled: boolean) => {
    if (isFilled) setIsSubmitted(true);
  };
  const handleFaceCaptured = (isFace: boolean) => {
    if (isFace) setIsCaptured(true);
  };

  useEffect(() => {
    if (isSubmitted && isCaptured) {
      let timer = setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  }, [isSubmitted, isCaptured]);
  return (
    <>
      <div className={`divCenter`}>
        {isSubmitted && !isCaptured && (
          <Kyc setIsFaceCaptured={handleFaceCaptured}></Kyc>
        )}
        {!isSubmitted && !isCaptured && (
          <Register setIsSubmitted={handleSubmitted}></Register>
        )}
        {isSubmitted && isCaptured && (
          <>
            <div>
              <div className={`${styles.textAlignCenter} ${styles.textLarge}`}>
                <p>Registration</p>
                <p>Complete</p>
              </div>
              <div>Returning to login page ...</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default RegisterPage;
