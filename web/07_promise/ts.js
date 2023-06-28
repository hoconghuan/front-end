/*

// statement  a function for callback
function delay(str) {
    return new Promise((resolve, reject) => {
        console.log(str);
        setTimeout(resolve, 0)
    })
}

// run code
delay('p1').then(() => {
    delay('p2')
})
    .then(() => { delay('p3') })
*/



// if don't have  promise

function delay(str, callback = null) {
    setTimeout(() => {
        console.log(str);
        callback && callback();
    }, 0);
}

delay('1', () => {
    delay('2'), () => {
        delay('3')
    }
})