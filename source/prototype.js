function foo(x, y) {
    this.x = x;
    this.y = y;
};
var bar = new foo(1, 2);

function foo2(z) {
    this.z = z;
};
//foo2.prototype = bar;

var bar2 = new foo2(10);
console.log(bar2.constructor);
console.log('x: ' + bar2.x + ', y: ' + bar2.y + ', z: ' + bar2.z);

bar.x = -1;
console.log('x: ' + bar2.x + ', y: ' + bar2.y + ', z: ' + bar2.z);

bar2.x = 10;
console.log('x: ' + bar2.x + ', y: ' + bar2.y + ', z: ' + bar2.z);

console.log(bar.x);

console.log('----');
console.log(bar2.constructor);
foo.prototype = bar2;
foo2.prototype.constructor = foo;
console.log(bar2.constructor);

bar2.x = 1000;
console.log('----');
console.log(bar2);


var bar3 = new foo(10, 20);
console.log('-----');
console.log(bar.z);
console.log(bar.constructor);
console.log(bar.__proto__);
console.log(bar.constructor.prototype);

console.log('-----');

console.log(bar3.z);
console.log(bar3.constructor);
console.log(bar3.__proto__);
console.log(bar3.constructor.prototype);
