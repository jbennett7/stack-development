function greet(person: { firstName: string }) {
  alert(`Hello, ${person.firstName}`);
}

const person = { name : "Frank" };
greet(person);
