let notas = [7, 6, 10];
console.log("A primeira nota do aluno é: " + notas[0]);
console.log("A segunda nota do aluno é: " + notas[1]);
console.log("A terceira nota do aluno é: " + notas[2]);


let media = (notas[0] + notas [1] + notas[2]) / notas.length;

if (media >= 7){
    console.log("O aluno está " + "APROVADO com média " + media);
} else {
    console.log("O aluno está " + "REPROVADO com média " + media);
}
