import React, { useState } from 'react';

const FormularioComentario = ({ onAdicionarComentario }) => {
  const [nome, setNome] = useState('');
  const [comentario, setComentario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdicionarComentario(nome, comentario);
    setNome('');
    setComentario('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Nome do usuário"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '10px' }}
      />
      <input
        type="text"
        placeholder="Escreva um comentário..."
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '10px' }}
      />
      <button type="submit" style={{ padding: '10px 20px' }}>Enviar</button>
    </form>
  );
};

export default FormularioComentario;
