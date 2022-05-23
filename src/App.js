import "./App.css";
import Inscription from "./Components/Inscription/Inscription";
import Jeux from "./Components/jeux/Jeux";
import { useState, useEffect } from "react";
import Loading from "./Components/loading/Loading";

function App() {
  const [connected, setConnected] = useState(false);
  console.log({ connected });
  const [identifiant, setIdentifiant] = useState(""); // identifiant de l'utilisateur
  const [attente, setAttente] = useState(false); // variable qui permet de savoir si l'utilisateur est en attente

  useEffect(() => {
    if (connected) {
      console.log("connected");
    } else {
      console.log("not connected");
    }
  }, [connected]);

  return (
    <div className="App">
      {attente ? (<Loading />):( Inscription )}
        {connected ? (
        <Jeux identifiant={identifiant} />
      ) : (
        <Inscription
          setConnected={setConnected}
          setIdentifiant={setIdentifiant}
            identifiant={identifiant}
            setAttente={setAttente}
            attente={attente}
        />
      )}
      
    </div>
  );
}

export default App;
