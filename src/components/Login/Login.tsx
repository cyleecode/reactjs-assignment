import { useState } from "react";
import { ContextManager } from "../../contexts/all-context";
import styles from "./Login.module.scss";

const Login = () => {
  const _c = ContextManager();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [attemp, setAttemp] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    setAttemp(attemp + 1);
    //store login to ContextManager

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
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
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
        </div>
        <input type="submit" value="Login" disabled={isLoading} />
        <div>
          <span
            className={
              attemp > 2
                ? `${styles["warning-show"]}`
                : `${styles["warning-hide"]}`
            }
          >
            Too many login attemps
          </span>
        </div>
        <br></br>
        <a href="/forgot_password">forgot password</a>
      </form>
    </>
  );
};
export default Login;
