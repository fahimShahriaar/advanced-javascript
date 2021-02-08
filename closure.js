function bankAccount(initialBalance) {
    var balance = initialBalance;
    return function() {
        return balance;
    }
}
var balance = bankAccount(100000);
console.log(balance());