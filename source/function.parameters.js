function foo(x, y, foo) {
    console.log(x);
    console.log(y);
    console.log(foo);

    if (x != 1) foo(1, 2, 3);
}

foo(2, 4, foo);

foo(20, 30, 40);
