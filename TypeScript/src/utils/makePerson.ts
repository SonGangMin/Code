export function makePerson(name: string, age: number) {
  return { name: name, age: age };
}

export function testMakePerson() {
  console.log(makePerson("잭슨", 22), makePerson("윌슨", 33));
}
