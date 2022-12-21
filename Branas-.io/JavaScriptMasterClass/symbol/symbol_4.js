let regexp = /JavaScript/;
regexp[Symbol.match] = false;
//false
console.log("/JavaScript/".startsWith(regexp));
//true