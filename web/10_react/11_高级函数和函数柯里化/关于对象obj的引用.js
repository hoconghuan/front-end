const a = 'name'
const obj1 = {}

obj1.a = 'tom'
console.log('obj1', obj1);

const b = 'name'
const obj2 = {}

obj2[b] = 'tom'
console.log('obj2', obj2);


/*
输出结果

obj1 { a: 'tom' }    obj.  表示是拿到对象中的属性a ，显示属性a 代表的值
obj2 { name: 'tom' }  obj[]  表示拿到对象中属性的属性名， 显示属性名的代表值




*/