export {};

// interfaces define attributes of objects
interface Person {
  firstName: string;
  lastName: string;
  nicknames?: string[]; // optional because of: `?`
  age?: number; // optional because of: `?`
}

function getName(person: Person) {
  return `${person.firstName} ${person.lastName}`;
}

// `p` is compatible with Person
const p = {
  firstName: "Ola",
  lastName: "Nordman",
  age: 25,
  height: 180
};

console.log(`Hello, ${getName(p)}`);

// interfaces can extend other interfaces
interface PowerRanger extends Person {
  color: string;
}

// Read more here:
// https://www.typescriptlang.org/docs/handbook/interfaces.html
