const timeUnits = [];
timeUnits[0] = "minute";
timeUnits[10] = "hour";
timeUnits[20] = "day";
console.log(timeUnits);
console.log(timeUnits.length);
delete timeUnits[1];
console.log(timeUnits);
console.log(timeUnits.length);

//O comprimento do objeto timeUnits é 21.