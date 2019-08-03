const names = [
    'Doralice Fedô',
    'Hanna Preguiça',
    'Clotilde Louca'
];

const print =name => console.log(name);
const lastNameFirst = name => {
    const [firstName, lastName] = name.split(" ");
    return `${lastName}, ${firstName}`;
}

names
    .map(lastNameFirst)
    .sort()
    .reverse()
    .forEach(print);