import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.scss";
import { ContextManager } from "../../contexts/all-context";
const Landing = () => {
  const _c = ContextManager();
  return (
    <>
      <div className={`divCenter ${styles.itemGap}`}>
        <div>Welcome to ...</div>
      </div>
    </>
  );
};

export default Landing;
