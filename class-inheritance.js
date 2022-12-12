function BaseClass(value = ''){
    this.value = value;
}

BaseClass.prototype.plus = function(...args) {
    this.value = args.reduce((sum, elem) => sum + elem, this.value);
    return this;
}

BaseClass.prototype.minus = function(n) {
    this.value = this.value.slice(this.value.length - n);
    return this;
}

BaseClass.prototype.multiply = function(int) {
    if (typeof this.value === 'string') {
        this.value = this.value.repeat(int);
    } else {
        this.value = this.value * int;
    }
    return this;
}

BaseClass.prototype.divide = function(int) {
    if (typeof this.value === 'string') {
        this.value = this.value.slice(0, Math.floor(this.value.length / int));
    } else {
        this.value = this.value / int;
    }
    return this;
}

BaseClass.prototype.remove = function(str) {
    this.value = this.value.split(str).join('');
    return this;
}

BaseClass.prototype.sub = function(from, n) {
    this.value = this.value.slice(from - 1, n);
    return this;
}

BaseClass.prototype.get = function() {
    return this.value;
}

//ES6 Classes
class IntBuilder extends BaseClass{
    constructor(value){
        super(value)
    }

    minus(...args){
        this.value = args.reduce((sum, elem) => sum - elem, this.value);
        return this;
    }

    mod(n){
        this.value = this.value % n;
        return this;
    }

    static random(from, to) {
        const randomNumber = Math.floor(Math.random()*(to - from) + from);
        return randomNumber;
    }
}

let testIntBuilder = new IntBuilder(10);

testIntBuilder
    .plus(2, 3, 2)
    .minus(1, 2)
    .multiply(2)
    .divide(4)
    .mod(3)
    .get()

// console.log(testIntBuilder.value)
console.log(IntBuilder.random(10, 2))

//ES5 Prototypes
function StringBuilder(value = '') {
    BaseClass.call(this, value);
}

StringBuilder.prototype = Object.create(BaseClass.prototype);

let testStringBuilder = new StringBuilder('Hello');

testStringBuilder
    .plus(' all', '!')
    .minus(4)
    .multiply(3)
    .divide(4)
    .remove('l')
    .sub(1, 1)
    .get()

console.log(testStringBuilder.value);