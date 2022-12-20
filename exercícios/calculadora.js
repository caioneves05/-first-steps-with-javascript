let numberRandom = (Math.random()*10).toFixed(0)

let sum = () => {
    for(n2 = 0; n2 <101; n2++){
        let soma = numberRandom*n2;
        console.log(`${numberRandom} X ${n2} = ${soma}`);
    }
}
sum();
