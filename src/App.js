import './App.css';
import ChatChamado from './pages/ChatChamado';
import ListaChamadas from './pages/ListaChamadas';
import VisualizarChamado from './pages/VisualizarChamado'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/lista" element={<ListaChamadas />} />
          <Route path="/lista/visualizar" element={<VisualizarChamado />} />
          <Route path="/lista/chat" element={<ChatChamado />} />
          <Route exact path="/" element={<ListaChamadas />} />
          <Route exact path="*" element={<ListaChamadas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
