var o = 1;
o = o + (o += 1);
console.log(o);

var o = 1;
o = (o += 1) + o;
console.log(o);

var obj = {o : 1};

obj.o = obj.o + (obj.o += 1);
console.log(obj.o);

obj.o = 1;
obj.o = (obj.o += 1) + obj.o;
console.log(obj.o);
