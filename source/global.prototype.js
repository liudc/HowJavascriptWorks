function foo(y) {
    this.y = y;
}

foo(2);
console.log(y);

foo.prototype.x = 10;
console.log(y);

var tmp1 = new foo();

console.log(tmp1.x);
