import { useNavigate, useParams } from "react-router-dom";
import { ContextManager, ILoginDetails } from "../../contexts/all-context";
import styles from "./Activate.module.scss";
import { useEffect, useState } from "react";

const ActivatePage = () => {
  const _c = ContextManager();
  const isActivated = _c.login?.activated;
  const [otp, setOTP] = useState<string>("");
  const navigate = useNavigate();
  const { email } = useParams(); //email contain
  useEffect(() => {
    if (isActivated) {
      console.log("isActivated");
      navigate("/home");
    }

    if (email) {
      //trigger web hook to verify
      const isVerified = true; // result from api
      if (isVerified) {
        console.log("isVerified");
        const user = _c.login;
        if (user?.activated && _c.setLogin) {
          user.activated = true;
          _c.setLogin(user);
          navigate("/home");
        }
      }
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //mock always true pin
    if (_c.setLogin) {
      const user: ILoginDetails = {
        role: 1,
        email: email || "",
        activated: true,
      };
      _c.setLogin(user);
      navigate("/home");
    }
  };

  return (
    <>
      <div className={`divCenter ${styles.divColumn}`}>
        <form onSubmit={handleSubmit}>
          <label>Input the pin you received</label>
          <br></br>
          <input
            type="password"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          ></input>
          <br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </>
  );
};
export default ActivatePage;
