import './App.css';
import ChamadosArquivados from './pages/ChamadosArquivados';
import ChatChamado from './pages/ChatChamado';
import ListaChamadas from './pages/ListaChamadas';
import VisualizarChamado from './pages/VisualizarChamado';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/chamados" element={<ListaChamadas />} />
          <Route path="/chamados/visualizar" element={<VisualizarChamado />} />
          <Route path="/chamados/chat" element={<ChatChamado />} />
          <Route path="/chamados/arquivados" element={<ChamadosArquivados />} />
          <Route exact path="/" element={<ListaChamadas />} />
          <Route exact path="*" element={<ListaChamadas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
