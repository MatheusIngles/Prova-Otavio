/* Questão 4 */
/* Primeiramente, vamos criar uma função */
function exercicio() {

    /* Como vai ser uma função para testar se o numero é ou não um quadrado perfeito */
    /* Acho melhor o usuario escolher, mas de qualquer forma so alterar que ainda sim tera o mesmo resultado */
    var numeroEscolhido = parseFloat(prompt("Escolha Um Numero:"))
    
    /* Função para  verificar se é ou não um quadrado perfeito */
    var Resultado = Verificação(numeroEscolhido)

    /* Alerta */
    if (Resultado) {
        alert("É um quadrado perfeito");
    } else {
        alert("Não é um quadrado perfeito");
    }
}

function Verificação(numeroEscolhido){

    /* Usei a função matematica que calcula a raiz quadrada do número */
   var raiz = Math.sqrt(numeroEscolhido);
   
   /* Verifica se a raiz é um número inteiro */
   return raiz === Math.floor(raiz);
}

  