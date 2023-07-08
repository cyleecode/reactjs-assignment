import { useEffect, useState } from "react";
import AppRouting from "./App.Routes";
import "./App.css";
import { Logout } from "./components";
import { ContextManager } from "./contexts/all-context";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const _c = ContextManager();
  const [prevContext, setPrevContext] = useState(_c);
  const [isLogined, setIsLogined] = useState(false);
  const [isLanding, setIsLanding] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = () => navigate("/login");
  const handleRegister = () => navigate("/register");

  useEffect(() => {
    if (prevContext !== _c) {
      setPrevContext(_c);
      if (_c.login?.email && _c.login.activated) {
        setIsLogined(true);
      } else {
        setIsLogined(false);
      }
    }
    if (location.pathname !== "/") {
      setIsLanding(false);
    } else {
      setIsLanding(true);
    }
  }, [location, _c, prevContext]);
  return (
    <>
      <div className="topBar">
        {!isLogined && isLanding && (
          <div className={`divReverseAlignment`}>
            <button onClick={handleLogin}>Sign in</button>
            <button onClick={handleRegister}>Sign up</button>
          </div>
        )}
        {isLogined && (
          <div className={`divReverseAlignment`}>
            <Logout></Logout>
          </div>
        )}
      </div>
      <AppRouting></AppRouting>
    </>
  );
}

export default App;
