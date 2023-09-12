//Crie a const para a frase aqui
// # Exercício 3

// A partir da frase a seguir, faça o que se pede.

// ```
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
// ```

// a) Crie uma `const` no seu código para **guardar a frase** (com aspas e tudo);

// b) Implemente uma função que recebe por parâmetro a `const` criada no passo **a)**  e imprima essa string trocando **verde** por **rosa**, e **azul** por **laranja**;

// c) **Verifique** se a nova string contém as palavras **verde** e **laranja**.

// **EXTRA:** tente fazer o trecho “mas não deixe o gato sair” ficar em **letras maiúsculas**, assim como o “BOAS VINDAS”


let casaJorge = () =>{
  const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair'
  let troca = frase.replace('verde','rosa').replace('azul','laranja')
  console.log(troca);
  console.log(`existe a palavra verde : ${frase.includes('verde')}, existe a palavra verde : ${frase.includes('laranja')}`);
  const frase2 = 'mas não deixe o gato sair'
  const fraseExtra = frase.replace(frase2,frase2.toUpperCase())
  console.log(fraseExtra);
}
casaJorge()