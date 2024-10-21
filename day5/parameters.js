//optional params:
function information(firstname, age) {
    return firstname + " " + age;
}
console.log(information('abi')); //abi undefined
console.log("tom", 39); // tom 39
//default params:
function detail(name, message) {
    if (message === void 0) { message = "welcome"; }
    return message + ' ' + name;
}
console.log(detail('abirami'));
console.log(detail('abirami', 'hi'));
console.log(detail('abirami', undefined));
