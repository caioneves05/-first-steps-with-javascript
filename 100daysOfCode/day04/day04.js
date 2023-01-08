//Para treinar para uma próxima maratona, Johnny faz uma corrida de longa distância todos os sábados. Ele deseja rastrear com que frequência o número de milhas percorridas neste sábado excede o número de milhas percorridas no sábado anterior . Isso é chamado de dia de progresso .

//Crie uma função que considere uma matriz de milhas percorridas todos os sábados e retorne o número total de dias de progresso de Johnny.

function monthlyRaceProgress(kmSaturday){
    let daysInProgress = 0
    for(let i = 0; i< kmSaturday.length; i++){
        if(kmSaturday[i] < kmSaturday[i+1]){
            daysInProgress++
        }
    };
    return `your progress during the days covered was ${daysInProgress} days`
};
console.log(monthlyRaceProgress([3,4,1,2])); //2 days

module.exports = monthlyRaceProgress;