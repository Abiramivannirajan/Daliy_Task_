//rest params
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60


//using string
function joinStrings(...strings:string[] ): string {
    return strings.join(",")


}
console.log(joinStrings("abi","preethi","vijay")+"are developers");
console.log(joinStrings("vidhya","surya","sam")+" are medical");

