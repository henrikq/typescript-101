/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

// Enums
enum Direction {
  Up,
  Down,
  Left,
  Right
}

// types and union types
type usualSuspects = boolean | number | string | object | null | undefined;

// Tuples
type tpl = [string, number];

// array types ( also example of Generics / Templates )
type anArray<T> = Array<T>;
type anotherArray<T> = T[];

// special types
type specials = void | any | never;
// void: the absence of having any type at all.
// any: when a type is not declared or can be implicitly inferred
// never: a value that never occurs, like the return of a function that does not return

// function types
type fnc1 = (num: number, str: string) => boolean;
type fnc2 = { doThing(num: number, str: string): boolean };
// type fnc2 = doThing(arg1: number, arg2: string): boolean; // simpler syntax that works in interfaces

// Read more here:
// https://www.typescriptlang.org/docs/handbook/basic-types.html
