import React, { useState } from "react";
import { produce } from "immer";

const persons = {
  name: "John",
  age: 25,
  address: {
    city: "New York",
    country: "USA",
  },
};

const Person = () => {
  const [person, setPerson] = useState(persons);
  const updatePerson = produce(person, (draft) => {
    draft.address.country = "KOREA";
  });
  console.log("원본==================", person);
  console.log("복사본================", updatePerson);

  return (
    <div>
      <ul>
        <li>11111111111111</li>
      </ul>
    </div>
  );
};

export default Person;
