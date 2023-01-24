const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise mil resolvida"), 1000);
});
  
  const promise2 = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 2 mil resolvida"), 2000);
});
  
const resolverPromisesAssincronas = async () => {
    const primary = await promise1();
    const second = await promise2();
  
    console.log(`${primary} /n ${second}`)
}
  
resolverPromisesAssincronas()