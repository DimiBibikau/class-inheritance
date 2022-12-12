// version with just two classes: the base one and the executive one
class BaseClass {
    constructor(value = 0) {
        this.value = value;
    }

    plus(...args){
        this.value = args.reduce((sum, elem) => sum + elem, this.value);
        return this;
    }

    minus(...args){
        this.value = args.reduce((sum, elem) => sum - elem, this.value);
        return this;
    }

    multiply(n){
        this.value = this.value * n;
        return this;
    }

    divide(n){
        this.value = this.value / n;
        return this;
    }

    mod(n){
        this.value = this.value % n;
        return this;
    }

    get(){
        return this.value;
    }

    static random(from, to) {
        const randomNumber = Math.floor(Math.random()*(to - from) + from);
        return randomNumber;
    }
}
class IntBuilder extends BaseClass {
    constructor(value = 0) {
        super(value);
    }
}

let intBuilder = new IntBuilder(10);

intBuilder
    .plus(2, 3, 2)
    .minus(1, 2)
    .multiply(2)
    .divide(4)
    .mod(3)
    .get()

console.log(intBuilder.value)
console.log(IntBuilder.random(10, 2))