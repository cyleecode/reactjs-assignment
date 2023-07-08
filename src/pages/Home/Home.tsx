import { Logout, Order } from "../../components";
import { ContextManager } from "../../contexts/all-context";
import styles from "./Home.module.scss";
const HomePage = () => {
  const _c = ContextManager();
  return (
    <>
      <div className={`${styles.divRow}`}>
        <div className={`${styles.divReverseAlignment}`}>
          <Logout></Logout>
        </div>
        <div>
          <Order></Order>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default HomePage;
