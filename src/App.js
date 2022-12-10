import styled from "styled-components";
import Header from "./components/Header";
import Filmes from "./components/Filmes.js";
import Sessoes from "./components/Sessoes";
import FinalizarPedido from "./components/FinalizarPedido";
import Assentos from "./components/Assentos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [filmes, setFilmes] = useState(undefined);
  const [sessoes, setSessoes] = useState(undefined);
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Filmes filmes={filmes} setFilmes={setFilmes} />}
        />
        <Route
          path="/sessoes/:idFilme"
          element={
            <Sessoes
            sessoes={sessoes}
            setSessoes={setSessoes}
            />
          }
        />
        <Route path="/assentos/:idSessao" element={<Assentos />} />
        <Route path="/sucesso" element={<FinalizarPedido />} />
      </Routes>
    </BrowserRouter>
  );
}
