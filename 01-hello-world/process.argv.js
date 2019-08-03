const values = process.argv.slice(2);

//values.forEach(values => console.log ('The values is:' + values))

function regularPrint(values){
    console.log('The values is: ' + values);
}
function fancyPrint(values) {
console.log(`---> ${values} <--`);
}

//const print = fancyPrint;
const print = eval(process.env.PRINTER) || regularPrint;
values.forEach(print);
