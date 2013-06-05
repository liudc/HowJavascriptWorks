
function test() {
    this.b = function inner_b () {
        x = 1000;
        console.log("inner_b: " + x);
    }

    this.c = function inner_c() {
        console.log("inner_c: " + this.a);
    }

    this.b();
    this.c();
    console.log("test2: " + x);
}

a = 30;

console.log(test);

var test = 10;

console.log(test);

var d;
d = new test();
test.prototype = { a: 100 };
console.log(d.a);
d.c();

console.log(d);

var e = new test();
e.c();
console.log(e);

console.log(x);

