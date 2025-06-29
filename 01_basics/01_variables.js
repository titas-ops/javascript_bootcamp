const accountId = 144553
let accountEmail = "titas@google.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;



accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])