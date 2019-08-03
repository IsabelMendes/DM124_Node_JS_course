const values = process.argv.splice(2);
console.log(values);

const convertToNumber = value => parseInt(value);
const numbers = values.map(convertToNumber);
console.log(numbers);

const sum = (total, current) => total + current;

const total = numbers.reduce(sum);
console.log(total)

/*const total = values
    .map(convertToNumber)
    .reduce(sum);*/

console.log('The sum is: ' + total);    

