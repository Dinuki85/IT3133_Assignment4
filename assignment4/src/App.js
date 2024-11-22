import './App.css';
import Details from './components/Details';
import { animals } from './data/AnimalsDb';
import '../src/assets/css/animal.css';

function App() {
  return (
    <div className="App">
      
      <Details animals={animals}/>
    </div>
  );
}


export default App;
