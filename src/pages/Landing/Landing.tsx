import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.scss";
import { ContextManager } from "../../contexts/all-context";
const Landing = () => {
  const _c = ContextManager();
  const navigate = useNavigate();
  const handleLogin = () => navigate("/login");
  const handleRegister = () => navigate("/register");
  return (
    <>
      <div className={`divCenter ${styles.itemGap}`}>
        <button onClick={handleLogin}>Sign in</button>
        <button onClick={handleRegister}>Sign up</button>
      </div>
    </>
  );
};

export default Landing;
