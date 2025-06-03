import React, { useState } from 'react';
import FormularioComentario from './FormularioComentario';
import ListaComentarios from './ListaComentarios';

const FeedDeComentarios = () => {
  const [comentarios, setComentarios] = useState([
    { nome: '', texto: '' },
    { nome: '', texto: '' }
  ]);

  const adicionarComentario = (nome, texto) => {
    if (nome && texto) {
      setComentarios([...comentarios, { nome, texto }]);
    }
  };

  return (
    <div>
      <h2>Feed de Comentários</h2>
      <FormularioComentario onAdicionarComentario={adicionarComentario} />
      <ListaComentarios comentarios={comentarios} />
    </div>
  );
};

export default FeedDeComentarios;
