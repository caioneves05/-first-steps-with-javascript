//Dada uma string contendo dígitos de 2 a 9 inclusive, retorne todas as combinações de letras possíveis que o número pode representar. Devolva a resposta em qualquer ordem .

//Um mapeamento de dígitos para letras (assim como nos botões do telefone) é fornecido abaixo. Observe que 1 não mapeia para nenhuma letra.



function phoneCombination(combination){
    const phone = {
        1: "",
        2: ["a","b","c"],
        3: ["d","e","f"],
        4: ["g","h","i"],
        5: ["j","k","l"],
        6: ["m","n","o"],
        7: ["p","q","r","s"],
        8: ["t","u","v"],
        9: ["w","x","y","z"]
  };
  console.log(phone[1][1])
}
  