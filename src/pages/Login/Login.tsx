import { Login } from "../../components";
import styles from "./Login.module.scss";
const LoginPage = () => {
  return (
    <>
      <div className={styles.divCenter}>
        <Login></Login>
      </div>
    </>
  );
};

export default LoginPage;
