import { get } from "lodash";
import { greet, getBird, isDuck, flatten } from "./utils/javascript";

greet();

const bird = getBird();
bird.quack();

const obj = flatten({ foo: { bar: "baz" } });

console.log(obj);
