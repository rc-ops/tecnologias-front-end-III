import React, { useState } from "react";

function Example(){
  // Declarando uma variável de estado chamada "count"
  // count é o nome da variável
  // setCount é o método setter para mudar o estado da variável
  // useState(0) é o useState com a variável iniciando do valor 0
  // também poderíamos iniciar sem nenhum valor (sem colocar 0)
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
        </button>
    </div>
  );
};

export default Example
