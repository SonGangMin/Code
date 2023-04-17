import { makeRandomNumber } from "../utils/makeRandomNumber";
import iPerson from "./iPerson";

export default class Person implements iPerson {
  constructor(public name: string, public age: number = makeRandomNumber()) {}
}

export const makePerson = (
  name: string,
  age: number = makeRandomNumber()
): iPerson => ({ name, age });
