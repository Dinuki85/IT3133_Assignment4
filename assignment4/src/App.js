import './App.css';
import Details from './components/Details';
import { animals } from './data/AnimalsDb';

function App() {
  return (
    <div className="App">
      <h1>Animal Matching Game</h1>
      <Details animals={animals}/>
    </div>
  );
}


export default App;
