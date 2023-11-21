interface Options {
    el: string | HTMLElement
}
interface Vuecls {
    options: Options
    init(): void
}
interface Vnode {
    tag: string
    text?: string
    children?: Vnode[]
}
class Dom {
    createElement(el: string) {
        return document.createElement(el) //create load DOM
    }
    setText(el: HTMLElement, text: string | null) {
        el.textContent = text  //put text in HTMLElment
    }
    render(data: Vnode) {
        let root = this.createElement(data.tag)
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach((item) => {
                let child = this.render(item)
                this.setText(child, item.text ?? null)
                root.appendChild(child)
            })
        } else {
            this.setText(root, data.text ?? null)
        }
        return root
    }
}
class Vue extends Dom implements Vuecls {
    options: Options;
    constructor(options: Options) {
        super()
        this.options = options
        this.init()
    }
    init(): void {
        let data: Vnode = {
            tag: 'div',
            children: [
                {
                    tag: 'h4',
                    text: 'Im head'
                },
                {
                    tag: 'h4',
                    text: 'Im body'
                }
            ]
        }
        let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el
        app?.appendChild(this.render(data))

    }
}


new Vue({
    el: '#app'
}
)