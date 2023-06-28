在vue3中 computed是函数不像vue2中是配置项，需要单独引入。和vue2一样有简写形式和完整形式
简写形式直接写成函数。
简写形式：
computed(()=>{
    return 
})

完整形式：
computed({
    get(){},
    set(){}
})

