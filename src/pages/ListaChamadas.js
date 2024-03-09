import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListaChamadas = () => {
  const navigate = useNavigate();

  // Função para voltar para a página anterior
  const voltar = () => {
    navigate(-1); // Navega de volta para a página anterior no histórico do navegador
  };

  // Funções para lidar com o clique nos botões
  const navigateTo = (path) => {
      navigate(path);
  };

  return (
    <div className="containerLista">
      <div className="header">
        <button className='btnBack' onClick={voltar}>&larr;</button>
        <h1>Chamadas de Pânico</h1>
      </div>
      <div className="content">
        <div className="containerChamada" onClick={() => navigateTo('/lista/chat')}>
          <div>
            <h2 className='chamadaTitle'>Chamado 1</h2>
            <h3 className='chamadaMensagem'>Oi</h3>
          </div>
          <button className="btnMenu" onClick={() => navigateTo('/lista/visualizar')}>&#9776;</button>
          <h3 className='horaMensagem'>12:55</h3>
        </div>

        <div className="containerChamada" onClick={() => navigateTo('/lista/chat')}>
          <div>
            <h2 className='chamadaTitle'>Chamado 2</h2>
            <h3 className='chamadaMensagem'>Oi</h3>
          </div>
          <button className="btnMenu" onClick={() => navigateTo('/lista/visualizar')}>&#9776;</button>
          <h3 className='horaMensagem'>12:55</h3>
        </div>
      </div>
    </div>
  );
};

export default ListaChamadas;
