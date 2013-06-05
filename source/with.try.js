var x = 10;
console.log(x);

with({x: 100}) {
    console.log(x);
    eval('console.log(x)');
}

eval('console.log(x)');
eval('var x = 111; console.log(x)');
console.log(x);

try {
    throw 'where is x?';
} catch (x) {
    console.log(x);
}
