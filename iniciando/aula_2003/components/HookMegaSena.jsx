import React, { useState } from "react";

const HookMegaSena = () => {
  const [numeroMega, setnumeroMega] = useState();
  const [numerosSorteados, setNumerosSorteados] = useState([]); // Instancia com um array vazio
  function sortearNumero() {
    if (numerosSorteados.length < 6) {
      let sorteado = Math.floor(Math.random() * 60) + 1;
      setnumeroMega(sorteado);
      // Pega o array atual (...numerosSorteados) e adiciona o "sorteado" a ele
      setNumerosSorteados([...numerosSorteados, sorteado]);
    } else {
      alert("Já foram sorteados os 6 números!");
    }
  }

  return (
    <div>
      <h1>Sorteador da mega sena feito em ReactJS</h1>
      <button onClick={sortearNumero}>
        Clique para sortear
      </button>
      <h2>Último número sorteado: {numeroMega}</h2>
      <h2>Números sorteados: {numerosSorteados.join(" - ")}</h2>
    </div>
  );
};

export default HookMegaSena;
