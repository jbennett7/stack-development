interface IPerson {
  firstName: string;
}

function greet(person: IPerson) {
  alert(`Hello, ${person.firstName}`);
}

function greetLouder(person: IPerson) {
  alert(`HELLO, ${person.firstName}!!!`);
}

const person = { firstName : "Frank", hairColor : "Black" };
greet(person);
greetLouder(person);
