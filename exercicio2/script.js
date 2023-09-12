// # Exercício 2

// Observe a string abaixo:

// ```jsx
//     const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// ```

// A partir dela, execute os passos abaixo:

// a) crie uma função que recebe **minhaString** por parâmetro e **Remova** o excesso de espaços no final da string;

// b) A função deve imprimir no console a **quantidade de caracteres** da string, *antes* e *depois* da remoção dos espaços;

// c) A função também deve **Substituir** os traços `________` pela palavra “sticioso”.


let curiosidade = () => {
  const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
  let reduz = minhaString.trim()
  console.log(reduz); 
  let info = minhaString.length
  console.log(`Essa frase tem ${info} de caracteres`);
  console.log(`Essa frase tem ${reduz.length} de caracteres após a redução.`);
  console.log(`Essa frase tem ${reduz.replace('________','sticioso')}.`);
}
console.log(curiosidade());

