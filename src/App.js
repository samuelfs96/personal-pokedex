import './App.css';
import SoundButton from './components/SoundButton'
import Pokedex from './components/Pokedex'

function App() {
  return (
    <>
      <SoundButton />
      <div className="container mx-auto">
        <Pokedex />
      </div>
    </>
  );
}

export default App;
