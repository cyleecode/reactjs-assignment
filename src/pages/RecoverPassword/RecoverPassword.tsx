import { useState } from "react";
import styles from "./RecoverPassword.module.scss";

const RecoverPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //add hook to submit reset password
    setIsSubmitted(true);
  };
  return (
    <>
      <div className="divCenter">
        {isSubmitted && (
          <>
            <div>We’ve sent an email to {email} with instructions.</div>
          </>
        )}
        {!isSubmitted && (
          <>
            <div>
              <form onSubmit={handleSubmit} className={styles.formLabelInput}>
                <div>
                  <label>Email:</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br></br>
                </div>
                <input type="submit" value="Reset password"></input>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default RecoverPasswordPage;
