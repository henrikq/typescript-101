export {};

interface Person {
  firstName: string;
  lastName: string;
  age?: number; // optional because of: `?`
  nicknames?: string[];
}

function isAdult(person?: Person) {
  // tsc will complain if optional attributes or parameters are not guarded
  if (person && person.age) {
    return person.age >= 18;
  }
  return undefined;
}
