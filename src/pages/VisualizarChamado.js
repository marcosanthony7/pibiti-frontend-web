import React from 'react';
import { useNavigate } from 'react-router-dom';

const VisualizarChamado = () => {
  const navigate = useNavigate();

  // Função para voltar para a página anterior
  const voltar = () => {
    navigate(-1); // Navega de volta para a página anterior no histórico do navegador
  };

  const handleChatClick = () => {
    // Navega para /chamados/chat
    navigate('/chamados/chat');
  };

  return (
    <div className="containerVisualizar">
      <div className="header">
        <button className='btnBack' onClick={voltar}>&larr;</button>
        <h1>Visualizar Chamado</h1>
        <button className="btnChat" onClick={handleChatClick}>Chat SSP</button>
      </div>
      <div className="content">
        <h2 className='dadosTitle'>Dados</h2>
        <p className='dadosChamado'>Data: 09/03/2024</p>
        <p className='dadosChamado'>Hora: 12:55</p>
      </div>
    </div>
  );
};

export default VisualizarChamado;
