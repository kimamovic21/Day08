var sum = 0;

function addThree() {
  sum = sum + 3;
}
addThree();

function addFive () {
sum = sum + 5;
}
console.log(sum);

addFive();


console.log(sum);

module.exports = {
    addThree,
    addFive
};