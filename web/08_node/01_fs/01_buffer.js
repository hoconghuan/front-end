let buf_1 = Buffer.alloc(10)
// console.log(buf_1);

let buf_2 = Buffer.allocUnsafe(10)
// console.log(buf_2);
//  为什么会有unsafe 是因为这样创建和加载比前面的要快些

let buf_3 = Buffer.from('hello')
console.log(buf_3);