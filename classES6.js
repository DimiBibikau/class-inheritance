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
    }
}

class IntBuilder extends Adder {
    constructor(value) {
        super(value);
    }
}

let intBuilder = new IntBuilder(10);

intBuilder
    .plus(2, 3, 2)

console.log(intBuilder.value)