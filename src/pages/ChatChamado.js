import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const ChatChamado = () => {
    const [mensagens, setMensagens] = useState([]);
    const [inputMensagem, setInputMensagem] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const socketRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const audioChuncksRef = useRef([]);
  
    useEffect(() => {
      socketRef.current = io('http://localhost:8000/');
  
      socketRef.current.on('receberMensagem', (msg) => {
        setMensagens((prevMensagens) => [
          ...prevMensagens,
          {
            id: msg.id,
            text: `${msg.id === socketRef.current.id ? 'Você' : 'Outro Usuário'}: ${msg.mensagem}`,
            base64Data: msg.base64Data,
          }
        ])
      });
  
      return () => {
        socketRef.current.disconnect();
      }
    }, []);
  
    const handleEnviarMensagem = () => {
      if (inputMensagem) {
        socketRef.current.emit('enviarMensagem', inputMensagem);
        setInputMensagem('');
      }
    }
  
    const handleGravadorAudio = () => {
      if (!isRecording) {
        startRecording();
      } else {
        stopRecording();
      }
      setIsRecording(!isRecording);
    };
  
    const startRecording = () => {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          mediaRecorderRef.current = new MediaRecorder(stream);
          mediaRecorderRef.current.ondataavailable = (event) => {
            if (event.data.size > 0) {
              audioChuncksRef.current.push(event.data);
            }
          };
  
          mediaRecorderRef.current.onstop = () => {
            const audioBlob = new Blob(audioChuncksRef.current, { type: 'audio/wav' });
            const reader = new FileReader();
            reader.onloadend = () => {
              const base64Data = reader.result.split(',')[1];
              socketRef.current.emit('audio', base64Data);
            };
            reader.readAsDataURL(audioBlob);
            audioChuncksRef.current = [];
          };
  
          mediaRecorderRef.current.start();
          audioChuncksRef.current = [];
        })
        .catch((error) => {
          console.error('Erro ao acessar o microfone:', error);
        });
    };
  
    const stopRecording = () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        mediaRecorderRef.current.stop();
      }
    };
  
    const MensagemTexto = ({ mensagem }) => (
      <p>{`${mensagem.text}`}</p>
    );
  
    const MensagemAudio = ({ mensagem }) => (
      <div>
        <audio controls>
          <source src={`data:audio/wav;base64,${mensagem.base64Data}`} type="audio/wav" />
        </audio>
      </div>
    );

    return (
        <div className="chat">
            <header className="header">
                <h1>Chat SSP</h1>
            </header>

            <div className='containerChat' id='outMensagens'>
                <div className='audioContainer' id='audioContainer'></div>
            </div>

            <div>
                {mensagens.map((msg) => {
                    return (
                        <div key={msg.id}>
                            {msg.base64Data ? <MensagemAudio mensagem={msg} /> : <MensagemTexto mensagem={msg} />}
                        </div>
                    )
                })}
            </div>

            <div className='containerMensagem'>
                <input type='text' value={inputMensagem} placeholder='Digite uma mensagem' onChange={(text) => setInputMensagem(text.target.value)}/>
                <button id='btEnviar' onClick={handleEnviarMensagem}>&rarr;</button>
                <button id='btGravar' onClick={handleGravadorAudio}>{isRecording ? '✖' : '🔊' }</button>
            </div>
        </div>
    );
};

export default ChatChamado;
