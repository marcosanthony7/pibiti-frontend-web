import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListaChamadas = () => {
  const navigate = useNavigate();

  // Função para voltar para a página anterior
  const voltar = () => {
    navigate(-1); // Navega de volta para a página anterior no histórico do navegador
  };

  // Função para lidar com o clique no botão de menu
  const handleMenuClick = (event) => {
    // Impede a propagação do evento para o container de chamada
    event.stopPropagation();
    // Navega para /lista/visualizar
    navigate('/lista/visualizar');
  };

  // Função para lidar com o clique no container de chamada
  const handleContainerClick = () => {
    // Navega para /lista/chat
    navigate('/lista/chat');
  };

  return (
    <div className="containerLista">
      <div className="header">
        <button className='btnBack' onClick={voltar}>&larr;</button>
        <h1>Chamadas de Pânico</h1>
      </div>
      <div className="content">
        <div className="containerChamada" onClick={handleContainerClick}>
          <div>
            <h2 className='chamadaTitle'>Chamado 1</h2>
            <h3 className='chamadaMensagem'>Oi</h3>
          </div>
          <button className="btnMenu" onClick={handleMenuClick}>&#9776;</button>
          <h3 className='horaMensagem'>12:55</h3>
        </div>

        <div className="containerChamada" onClick={handleContainerClick}>
          <div>
            <h2 className='chamadaTitle'>Chamado 2</h2>
            <h3 className='chamadaMensagem'>Oi</h3>
          </div>
          <button className="btnMenu" onClick={handleMenuClick}>&#9776;</button>
          <h3 className='horaMensagem'>12:55</h3>
        </div>
      </div>
    </div>
  );
};

export default ListaChamadas;
