/* Questão 2 */

function exercicio2() {
   /* Como é algo que vai ser testado acho mais justo deixa que ele Coloque sua Senha que queira Validar */
   var SuaSenha = prompt("Qual a sua Senha?")

   /* Aqui, eu divido os caracteres e números presentes na senha em posições de um vetor. */
   var SenhaMatris = SuaSenha.split("")  

   /* Primeiro Filtro: */
   /* Aqui, já eliminei as senhas com menos de 8 caracteres. */
   if (SenhaMatris.length < 8 ){
      alert("Por favor, defina outra senha. Sua senha é muito curta. Coloque no mínimo 8 caracteres.")

      exercicio6()
   }

   /* Segundo Filtro: */
   /* Aqui farei a restrição para verificar a presença de um caractere maiúsculo. */
   var SenhaString = SenhaMatris.join('');

   if (/[A-Z]/.test(SenhaMatris)){

      /* Terceiro Filtro */
      /* Vou fazer a filtragem para saber se ele tem uma letra minuscula */
      if (/[a-z]/.test(SenhaMatris)){

         /* Quarto e Ultimo Filtro */
          /*Assim ele verificara se esta presente em senha. Posto isso hora do fedback para o usuario */
          if(/[0-9]/.test(SenhaMatris) ) {

            alert("Sua Senha é Segura")
            return

            /* Caso Não tenha Numeros */
          } else {
            alert("Voce Deve colocar Numeros!!!")
            exercicio6()
          }


      /* Caso ele não tenha uma letra minuscula */
      } else{
         alert("Sua senha deve ter no minimo uma letra maiuscula")
         exercicio6()
      }

   /* Caso ele não tenha letra maiuscula */
   } else {
      alert("Sua senha Deve ter no minimo uma letra maiuscula")
      exercicio6()
   }
}
  