/* Questão 1 */
/* Primeiramente Vamos Criar uma função */
function exercicio() {

    /* Perguntar ao Usuario Qual o Numero */
    var numeroEscolhido = parseFloat(prompt("Digite o numero desejado"))
    /* Criar uma Variavel de Checagem para depois */
    var Resultado = 1

/* Aqui Começa os "IFs e ElSEs", com o intuito de ja filtar os numeros 0 e 1 de irem adiante no codigo.  */
    if(numeroEscolhido > 1){

        /* Aqui Coloco que o numero deve ser divisivel por ele mesmo e por 1 */
        if((numeroEscolhido / numeroEscolhido) === 1 && (numeroEscolhido / 1) ===  numeroEscolhido){

            /* Crio um loop para realizar uma verificação e descobrir se o resultado da divisão do número escolhido até a sua raiz quadrada é diferente de 0*/
            for (let check = 2; check <= Math.sqrt(numeroEscolhido); check++) {
                /* Caso ele tenha um resultado em que é zero a variavel resualtado ganha mais 1 */
                if(numeroEscolhido % check === 0){
                    Resultado = 2
                    break 
                }  
                                
            } 

            /* Aqui ele filtra o Resultado e mostra para o usuario a resposta */
            if (Resultado === 1){
                alert("Ele é Primo")
            } else {
                alert("Ele não é Primo")
            }
            
        } else {
            alert("Seu numero não é primo")
        }
    
    /* Caso numero seja 0 ele avisa ao usuario e solicita que ele coloque outro */
    } else if (numeroEscolhido === 0) {
        alert("0 é divide todos os numeros então ele não é primo, passe outro numero.")
    
    /* Caso numero seja 1 ele avisa ao usuario e solicita que ele coloque outro */
    } else if (numeroEscolhido === 1) {
        alert("O numero 1 não é primo pois ele possui um único divisor, ele mesmo. Logo passe outro numero.")
    }
}

/* Questão 1 */
/* Primeiramente Vamos Criar uma função */
function exercicio2() {
    /* Perguntar ao Usuario Qual o Numero */
    var numeroEscolhido = 1000;
  
    /* Aqui Começa os "IFs e ElSEs", com o intuito de já filtrar os números 0 e 1 de irem adiante no código. */
  
    /* Crio um loop para realizar que adiciona a let "numero" +1 e depois faz uma verificação se o "numero" vai ser menor que "numeroEscolhido" assim listando somente numeros até 1000 */
    for (let numero = 2; numero < numeroEscolhido; numero++) {
      /* Variavel de teste de checagem */
      var checagem = true;
  
       /* Crio um loop para realizar uma verificação e descobrir se o resultado da divisão do número escolhido até a sua raiz quadrada é diferente de 0 */
      for (let check = 2; check <= Math.sqrt(numero); check++) {
        /* Caso ele tenha um resultado em que é zero, a variavel checagem ganha o valor de false */
        if (numero % check === 0) {
          checagem = false;
          break;
        }
      }
  
      if (checagem) {
        console.log(numero);
      }
    }

    alert("Os numeros estão no console")
  }
  