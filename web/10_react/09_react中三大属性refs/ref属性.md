
ref三种写法：字符串，回调，react的createRef方法的区别

字符串：  ref='xxx' , 想要拿到值 要调用 this.refs.xxx.value

回调：  回调分两种：
    1、 ref={(currentNode)=>{this.xxx = currentNode}}   这种在重新渲染的时候会两次渲染，第一次的值为Null， 第二次的值为传递值  
    2、 ref={this.xxx}
        sss = (currentNode)=>{this.xxx = currentNode}   这种写法就避免了回调会两次渲染。

        两种的写法拿值： this.xxx.value

createRef:   先要声明接收

      xxx = React.createRef(),  在虚拟DOM端是 ref = {this.xxx}   拿值是： this.xxx.current.value 
