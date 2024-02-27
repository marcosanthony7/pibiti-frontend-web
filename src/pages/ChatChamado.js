import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer';

const ChatChamado = () => {
    const [mensagem, setMensagem] = useState('');
    const navigate = useNavigate();

    const enviarMensagem = () => {
        // Lógica para enviar a mensagem
        console.log(mensagem);
        setMensagem(''); // Limpa o campo de mensagem após o envio
    };

    // Função para voltar para a página anterior
    const voltar = () => {
        navigate(-1); // Navega de volta para a página anterior no histórico do navegador
    };

    return (
        <div className="chat-container">
            <div className="header">
                <button className='back-button' onClick={voltar}>&larr;</button>
                <h1>Chat</h1>
            </div>
            <div className="chat-messages">
                {/* Mensagens vão aqui */}
                <div className="message sent">Oi <span>12:54</span></div>
                <div className="message received">Oi <span>12:55</span></div>
                {/* Adicione mais mensagens conforme necessário */}
            </div>
            <div className="chat-input">
                <input type="text" value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder="Mensagem" className="mensagem-input"/>
                <button onClick={enviarMensagem} className="enviar-mensagem-btn">&rarr;</button>
            </div>
            <Footer text="USE COM RESPONSABILIDADE" />
        </div>
    );
};

export default ChatChamado;
