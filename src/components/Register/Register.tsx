import { useState } from "react";
import styles from "./Register.module.scss";

export enum USER_ROLE {
  NORMAL,
  ADMIN,
}
export interface IUserDetails {
  id: string | undefined;
  username: string;
  role: USER_ROLE;
  email: string;
  created: Date | undefined;
}

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formLabelInput}>
        <div>
          <label>Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
        </div>
        <div>
          <label>Retype Password: </label>
          <input
            type="password"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
          />
          <br></br>
        </div>
        <input type="submit" value="Register" />
        <br></br>
      </form>
    </>
  );
};
export default Register;
