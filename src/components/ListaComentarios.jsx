import React from 'react';

const ListaComentarios = ({ comentarios }) => {
  return (
    <div>
      <h3>Comentários:</h3>
      {comentarios.map((comentario, index) => (
        <p key={index}><strong>{comentario.nome}:</strong> {comentario.texto}</p>
      ))}
    </div>
  );
};

export default ListaComentarios;
