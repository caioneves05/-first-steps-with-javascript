//Você está no comando da churrasqueira. Uma espetada vegetariana é uma espetada que só tem legumes (-o) . Um espeto não vegetariano é um espeto com pelo menos um pedaço de carne (-x) .

//Por exemplo, a grelha abaixo tem 4 espetos não vegetarianos e 1 espeto vegetariano (o do meio).

const barbecueGrill = 
[
    "--xo--x--ox--",
    "--xx--x--xx--",
    "--oo--o--oo--",
    "--xx--x--ox--",
    "--xx--x--ox--"
];

function skewerCounter() {
    
    let countVegetarianSkewer = 0
    let countNotVegetarianSkewer = 0

    for(let i = 0; i < barbecueGrill.length; i++){
        if(barbecueGrill[i].includes('x')){
            countNotVegetarianSkewer++
        }
        else{
            countVegetarianSkewer++
        };
    };
return (`the grill below has ${countNotVegetarianSkewer} non-vegetarian skewers and ${countVegetarianSkewer} vegetarian skewer`)    
};
console.log(skewerCounter())

module.exports = skewerCounter;