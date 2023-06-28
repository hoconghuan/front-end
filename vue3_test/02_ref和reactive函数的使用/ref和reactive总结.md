ref和reactive函数总结:

1、ref和reactive函数都是对setup中的变量进行劫持，让变量称为相应式代理。
         ref 控制台打印时封装成： refImpl 英文全称： reference 参考 + implement  执行/实现
         reactive控制台打印封装成：proxy  代理

ref只适用于基本数据类型 :string number  boolean 这些
reactive适用于： array object  function

