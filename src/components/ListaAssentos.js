import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import ItemAssento from "./ItemAssento";

export default function ListaAssento({
  assentos,
  assentoSelecionados,
  setAssentoSelecionados,
}) {
  function estaSelecionado(assento) {
    return assentoSelecionados.includes(assento.name);
  }

  function adicionarAssento(assento) {
    setAssentoSelecionados([...assentoSelecionados, assento.name]);
  }

  function removerAssento(assentoRemovido) {
    setAssentoSelecionados(
      assentoSelecionados.filter((assento) => assento !== assentoRemovido.name)
    );
  }

  return (
    <>
      {assentos?.seats.map((a) => (
        <LinkPersonalizado key={a.id}>
          <ItemAssento
            assento={a}
            estaSelecionado={estaSelecionado}
            adicionarAssento={adicionarAssento}
            removerAssento={removerAssento}
          />
        </LinkPersonalizado>
      ))}
    </>
  );
}

const LinkPersonalizado = styled(Link)`
  text-decoration: none;
`;
