const str = "name=John&age=30&city=New York";
const keyValuePairs = str.split('&');

const obj = {};
keyValuePairs.forEach(pair => {
    const [key, value] = pair.split('=');
    obj[key] = value;
});

console.log(obj);
