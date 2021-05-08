interface IPerson {
  firstName: string;
  age?: number;
};

function greet(person: IPerson) {
  alert(`Hello, ${person.firstName}`);
}

greet({ firstName : "Frank" });
