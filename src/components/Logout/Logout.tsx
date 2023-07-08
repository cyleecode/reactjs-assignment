import { ContextManager } from "../../contexts/all-context";

const Logout = () => {
  const _c = ContextManager();
  const handleLogout = () => {
    _c.setLogin({});
  };
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
export default Logout;
