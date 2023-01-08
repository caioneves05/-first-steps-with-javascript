function createArray() {
    return new Proxy({}, {
    });
}
const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";
console.log(languages);
console.log(languages.length);

/* Existem métodos chamados de trap, para diversos tipos de eventos relacionados a um objeto.
apply
construct
defineProperty
deleteProperty: é invocado quando uma propriedade é deletada.
get: E invocado quando uma propriedade é acessada.
getOwnPropertyDescriptor
getPrototype0f
has
isExtensible
ownKeys
preventExtensions
set: É invocado quando uma propriedade é definida no objeto.
setPrototypeof
*/