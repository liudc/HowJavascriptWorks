function foo(x, y) {
    this.x = x;
    this.y = y;
    return 100;
};

function foo2(z) {
    this.z = z;  
};

var bar = new foo(1, 2);
var bar2 = new foo2(10);

console.log(bar);
console.log(bar.z);
