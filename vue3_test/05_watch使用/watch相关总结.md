watch这些在vue3是需要单独引用的，是以函数形式监视
watch(target,(newValue,oldValue)=>{

});
如果 target 是基本类型ref控制相应式。 直接输入target，监视target的refImpl响应式，如果加.value就监视 target的具体值了，控制台会跳警告。要想加.value，就要是ref复杂类型的响应式。 refImpl为复杂性，value值为proxy代理，.value就可以监听具体对象

如果 target 是基本类型reactive控制相应式。 全部监听直接用
watch(target,(newValue,oldValue)=>{

});

某个属性：
watch(()=>target.prop,(newValue,oldValue)=>{

});

某些属性：
watch([()=>target.prop,()=>target.prop],(newValue,oldValue)=>{

});



ps:在reavtive监视是值的改变是无法查看的。