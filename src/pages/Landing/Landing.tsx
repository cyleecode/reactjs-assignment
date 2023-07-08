import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.scss";
const Landing = () => {
  const navigate = useNavigate();
  const handleLogin = () => navigate("/login");
  return (
    <>
      <div className={`divCenter ${styles.itemGap}`}>
        <button onClick={handleLogin}>Sign in</button>
        <button>Sign Up</button>
      </div>
    </>
  );
};

export default Landing;
