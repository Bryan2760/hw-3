

const name = prompt ("Enter Name:");
console.log (`Hello, ${name}`);

const unit = prompt ("Number of units completed at college:");
console.log (`Your grade standing is ${unit}`);

console.log (`${name}, This is the name entered`)


if (unit <= 30) {
  console.log(`Freshman`)
};
if (unit <= 60 && unit >= 31) {
  console.log(`Sophmore`)
};
if (unit >= 61 && unit <= 90) {
  console.log(`Junior`)
};
if (unit >= 91) {
  console.log(`Senior`)
}