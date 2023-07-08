import { useEffect } from "react";
import { ContextManager, ILoginDetails } from "../../contexts/all-context";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const _c = ContextManager();
  const navigate = useNavigate();
  const handleLogout = () => {
    if (_c.setLogin) _c.setLogin({} as ILoginDetails);
    navigate("/");
  };
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
export default Logout;
