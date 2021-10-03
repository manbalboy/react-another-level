import logo from './logo.svg';
import './App.css';
import Composition from "./components/2-4-props/Composition";
import Extaction from "./components/2-4-props/Extraction/Extraction";

function App() {
    return (
        <div className="App">
            <Composition/>
            <Extaction/>
            <Composition/>
            <Composition/>
        </div>
    );
}

export default App;
