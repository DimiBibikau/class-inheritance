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

BaseClass.prototype.multiply = function(n) {
    this.value = this.value.repeat(n);
    return this;
}

BaseClass.prototype.divide = function(int) {
    this.value = this.value.slice(0, Math.floor(this.value.length / int));
    return this;
}

BaseClass.prototype.remove = function(str) {
    this.value = this.value.split(str).join('')
    return this;
}

BaseClass.prototype.sub = function(from, n) {
    this.value = this.value.slice(from - 1, n)
    return this;

}

BaseClass.prototype.get = function() {
    return this.value;
}

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

