const isAdult = require("./isAdult");
const memize = require("./memize");

const isAdultMemo = memize(isAdult);

isAdultMemo(20);
isAdultMemo(18);
console.log(isAdultMemo(20));
