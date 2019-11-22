import { isFunction } from "lodash";
import flat from "flat";

export function greet(name = "World") {
  console.log(`Hello, ${name}!`);
}

export function getBird() {
  return {
    layEggs: () => console.log("layEggs"),
    quack: () => console.log("quack"),
    fly: () => console.log("fly")
  };
}

export function isDuck(bird) {
  return isFunction(bird.quack);
}

/**
 * flattens objects
 *
 * @param {object} obj - A string param.
 * @return {object} This is the result
 */
export function flatten(obj) {
  return flat(obj);
}
