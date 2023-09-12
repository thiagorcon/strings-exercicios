function imprimirComidasFavoritas (){
let nomeDoUsuario = prompt('Qual o seu nome?')
let Comida1 = prompt('Dia o seu primero prato favorito')
let Comida2 = prompt('Dia o seu segundo prato favorito')
let Comida3 = prompt('Dia o seu terceiro prato favorito')
console.log(`Estas são as comidas favoritas de ${nomeDoUsuario}:\n 1 - ${Comida1}\n 2 - ${Comida2}\n 3 - ${Comida3}`); 
}
imprimirComidasFavoritas();

/*
# Exercício 1
**Atenção:** para esse exercício você deve adicionar todas as soluções dentro da função **imprimirComidasFavoritas**.

Faça um programa que pergunte ao usuário seu **nome** e suas **três comidas favoritas**. Em seguida, imprima no console a seguinte mensagem:
    
   
    Estas são as comidas favoritas de nomeDoUsuario:
    - Comida1
    - Comida2
    - Comida3
  
    
Você deve usar apenas um `console.log()` para isso

  <details> 
  <summary> 💡 Dica</summary>
  
    ⭐ Você pode juntar texto com variáveis de duas formas:
    - Concatenando as strings (com o sinal de +)
    - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
    
    Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.
  
  </details>
  */