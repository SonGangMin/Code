const elements = document.querySelectorAll("*");

for (let a of elements) {
  a.addEventListener(
    "click",
    (e) =>
      console.log(
        `event.target : ${e.target.tagName}, event.currentTarget : ${e.currentTarget.tagName}`
      ),
    true
  );
}
