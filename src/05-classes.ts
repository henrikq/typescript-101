export {};

// classes are also a thing
class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}

function getName(person: Person) {
  return person.name;
}

const p = new Person("Ola", "Nordman");

console.log(`Hello, ${getName(p)}`);
