import AppRouting from "./App.Routes";
import "./App.css";
import { StateProvider } from "./contexts/all-context";

function App() {
  return (
    <StateProvider>
      <AppRouting></AppRouting>
    </StateProvider>
  );
}

export default App;
