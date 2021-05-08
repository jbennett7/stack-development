interface IPerson {
  firstName: string;
  getGreeting(lastName: string): string;
};

const person = {
  firstName : "Frank",
  getGreeting(lastName: string) {
    return `Hello, ${this.firstName} ${lastName}`;
  }
};

function greet(person: IPerson) {
  alert(person.getGreeting("Zammetti"));
}

greet(person);
