class BaseClass {
    constructor(value = 0) {
        this.value = value;
    }
}

class Adder extends BaseClass {
    constructor(value) {
        super(value);
    }

    plus(...args){
        this.value = args.reduce((sum, elem) => sum + elem, this.value);
        return this;
    }
}
class Subtractor extends Adder {
    constructor(value) {
        super(value);
    }

    minus(...args){
        this.value = args.reduce((sum, elem) => sum - elem, this.value);
        return this;
    }
}

class Multiplier extends Subtractor{
    constructor(value) {
        super(value);
    }

    multiply(n){
        this.value = this.value * n;
        return this;
    }
}

class Divider extends Multiplier{
    constructor(value) {
        super(value);
    }

    divide(n){
        this.value = this.value / n;
        return this;
    }
}

class Remainder extends Divider {
    constructor(value) {
        super(value);
    }

    mod(n){
        this.value = this.value % n;
        return this;
    }
}

class Random extends Remainder{
    static random(from, to) {
        const randomNumber = Math.floor(Math.random()*(to - from) + from);
        return randomNumber;
    }
}

class Getter extends Random{
    constructor(value) {
        super(value);
    }

    get(){
        return this.value;
    }
}

class IntBuilder extends Getter {
    constructor(value) {
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