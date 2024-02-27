import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatChamado from './pages/ChatChamado';
import ListaChamadas from './pages/ListaChamadas';
import VisualizarChamado from './pages/VisualizarChamado';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/lista" element={<ListaChamadas />} />
          <Route path="/lista/visualizar" element={<VisualizarChamado />} />
          <Route path="/lista/visualizar/chat" element={<ChatChamado />} />
          <Route exact path="/" element={<ListaChamadas />} />
          <Route exact path="*" element={<ListaChamadas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
