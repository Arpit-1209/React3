import logo from './logo.svg';
import './App.css';
import ColorPicker from './components/ColorPicker';
import "C:/Users/Arpit Srivastava/OneDrive/Desktop/MERN fullstack/node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const colors = ["red", "blue", "green", "yellow"];
  return (
    <div className="App">
      <ColorPicker colors={colors}/>
    </div>
  );
}

export default App;
