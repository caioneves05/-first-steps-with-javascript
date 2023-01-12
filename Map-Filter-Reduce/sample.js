const numbers = [10, 18, 1, 15, 2, 12, 21, 33, 100];

const numbersPairs = numbers.filter(function(item){
  return item % 2 == 0 && item >= 10;
});

const numbersPairsMult = numbersPairs.map(function(item){
  return item *2;
});

const numbersPairsMultMedia = numbersPairsMult.reduce((total, item,indice)=>{
  return (total + item) / (indice +1);
}); 


console.log(numbersPairsMultMedia);