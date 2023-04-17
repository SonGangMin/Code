const member1 = ["HTML", "CSS"];
const member2 = ["CSS", "JavaScript", "React"];
const member3 = ["JavaScript", "TypeScript"];
const subjects = [...member1, ...member2, ...member3];

const resultList = new Set();
subjects.forEach((subject) => {
  resultList.add(subject);
});

const result = document.querySelector("#result");
result.innerHTML = `
<ul>
${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
</ul>
`;
