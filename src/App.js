import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <>
      <Login setLogin={setLogin} />

      {login && <Home />}
    </>
  );
}

export default App;
