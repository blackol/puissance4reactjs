import "./App.css";
import Inscription from "./Components/Inscription/Inscription";
import Jeux from "./Components/jeux/Jeux";
import { useState, useEffect } from "react";
import Loading from "./Components/loading/Loading";

function App() {
  const [connected, setConnected] = useState(false);
  console.log({ connected });
  const [identifiant, setIdentifiant] = useState(""); // identifiant de l'utilisateur

  useEffect(() => {
    if (connected) {
      console.log("connected");
    } else {
      console.log("not connected");
    }
  }, [connected]);

  return (
    <div className="App">
      {connected ? (
        <Jeux identifiant={identifiant} />
      ) : (
        <Inscription
          setConnected={setConnected}
          setIdentifiant={setIdentifiant}
          identifiant={identifiant}
        />
      )}
    </div>
  );
}

export default App;
