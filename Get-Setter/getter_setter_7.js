const retangule = {};
Object.defineProperty(retangule, "y", {
    set(y){
        this.yy = y;
    }
});
Object.defineProperty(retangule, "x", {
    set(x){
        this.xx = x;
    }
})
Object.defineProperty(retangule, "area", {
    get() {
        return this.xx * this.yy;
    }
});
retangule.xx = 10;
retangule.yy = 2;
console.log(retangule.area);
