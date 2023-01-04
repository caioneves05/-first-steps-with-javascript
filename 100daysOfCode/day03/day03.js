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