import Adicao from "./components/Adicao";
import Subtracao from "./components/Subtracao";
import Divisao from "./components/Divisao";
import Multiplicacao from "./components/Multiplicacao";

function App() {
  return (
    <div>
      <Adicao num1={5} num2={10} />
      <Subtracao n1={7} n2={9} />
      <Divisao n1={18} n2={6} />
      <Multiplicacao n1={17} n2={29} />
    </div>
  );
}

export default App;
