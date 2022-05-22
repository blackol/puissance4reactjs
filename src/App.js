import './App.css';
import Inscription from './Components/Inscription/Inscription';
import jeux from './Components/jeux/jeux';
import { Route, Switch, Routeur } from 'react-router-dom';


function App() {
  return (
    <Routeur>
      <switch>
        <Route exact path="/" component={Inscription} />
        <Route path="/jeux" component={jeux} />
      </switch>
    </Routeur>
  );
}

export default App;
