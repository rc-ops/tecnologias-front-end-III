import Aluno from "./components/Aluno"

function App() {
  const alunos = [
    {
      nome: "Maurício",
      email: "mauricio@mauriciosantos.com",
      curso: "Arquitetura",
      media: 5
    },
    {
      nome: "João",
      email: "jpdjakq@hotmail.com",
      curso: "Informática",
      media: 6
    },
    {
      nome: "Adalberto",
      email: "adlbogouveia@gmail.com",
      curso: "Química",
      media: 7
    }
  ]

  return (
    <div>
      <Aluno>
        {alunos.map((aluno, i) =>
          <>
            <h1>Lista de alunos</h1>
            <p>Nome: {aluno.nome}</p>
            <p>Email: {aluno.email}</p>
            <p>Curso: {aluno.curso}</p>
            <p>Situação: {aluno.media >= 7 ? "APROVADO" : "REPROVADO"}</p>
          </>
        )}
      </Aluno>
    </div>
  )
}

export default App
