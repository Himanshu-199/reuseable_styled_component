import { useEffect } from "react";
import "./App.css";
import Home from "./containers/Home";
import useCookiesStatus from "./useHookes";

function App() {
  const isEnabled = useCookiesStatus();

  useEffect(() => {
    console.log("isEnabled===>", isEnabled);
  }, [isEnabled]);
 
  return (
    <> 
      <Home />
    </>
  );
}

export default App;
