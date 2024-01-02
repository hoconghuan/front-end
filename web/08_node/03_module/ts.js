function a() {
    console.log('hello');
}

function b(params) {
    console.log('word');
}

// 暴露i的第一种
module.exports = { a, b }

// 暴露的第二种
exports.a = a
exports.b = b

exports = module.exports = {}

// 为什么不能用 exports = value的原因是  直接改变了exports的类型，而require是引用module.exports的， module.exports还是对象。
//  exports.key = value是往 exports = module.exports = {}这条链中加属性。