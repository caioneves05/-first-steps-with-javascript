/* 
Você recebe uma sequência de palavras. Você precisa encontrar a palavra "Nemo" e retornar uma string como esta: I found Nemo at [the order of the word you find nemo]!.

Se você não conseguir encontrar o Nemo, retorne I can't find Nemo :(.
*/

function findNemo(sequenceOfWords){
    let counter = 0;
      const arrayFrom =  sequenceOfWords.split(" ");
      for(let i =0; i< arrayFrom.length; i++){
          if(arrayFrom[i] != "Nemo"){
            counter+= 1;
          }
      }
    if(arrayFrom.includes("Nemo")){
      return `I found Nemo at [${counter}]!`
    } else{
      return `I can't find Nemo :(`
    }
  }
  console.log(findNemo("I am finding Nemo !"));
  console.log(findNemo("Nemo is me"));
  console.log(findNemo("I Nemo am"));