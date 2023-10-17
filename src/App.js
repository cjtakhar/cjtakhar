import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      < BrowserRouter >
        <Navigation />
        <Routes>
          <Route path="/cjtakhar" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
