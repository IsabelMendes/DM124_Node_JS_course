const values = process.argv.splice(2);//sim
console.log(values);

const convertToNumber = value => parseInt(value);//sim
const numbers = values.map(convertToNumber);
console.log(numbers);

const sum = (total, current) => total + current;//sim

const total = numbers.reduce(sum);
console.log(total)

/*const total = values
    .map(convertToNumber)
    .reduce(sum);*/

console.log('The sum is: ' + total);    

