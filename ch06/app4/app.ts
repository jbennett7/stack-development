interface IPerson {
  firstName: string;
};

function greet(person: IPerson) {
  alert(`Hello, ${person.firstName}`);
}

function greetLouder(person: IPerson) {
  alert(`HELLO, ${person.firstName}!!!`);
}

greet({ firstName : "Frank", hairColor : "Black" });
