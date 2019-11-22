export {};

/**
 * Adds two numbers
 * @param a the first number to add
 * @param b the second number to add
 */
function add(a: number, b: number) {
  return a + b;
}
const foo = 2;
const bar = 4;

console.log(add(foo, bar));

// `add` is implicitly of type:
//    function add(a: number, b: number): number

// calling `add` with the wrong types causes a error at
// `npm run lint:check-types` (tsc)

// Read more here:
// https://www.typescriptlang.org/docs/handbook/functions.html
