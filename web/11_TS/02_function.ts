interface Obj {
    number: number[]
    add: (num: number) => void
}
let obj: Obj = {
    number: [1, 2],
    add(num: number) {
        this.number.push(num)
        console.log(obj);
    }
}

obj.add(3)

