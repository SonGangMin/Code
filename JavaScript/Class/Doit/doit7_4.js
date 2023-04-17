const container = document.querySelector("#container");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const bookList = document.querySelector("#bookList");
const save = document.querySelector("#save");

save.addEventListener("click", (event) => {
  event.preventDefault();

  const item = document.createElement("li");
  item.innerHTML = `${title.value}-${author.value}
  <span class="delButton">삭제</span>`;
  bookList.appendChild(item);
  title.value = "";
  author.value = "";

  const delButtons = document.querySelectorAll(".delButton");

  delButtons.forEach((delButton) => {
    delButton.addEventListener("click", removeItem);
  });
});

function removeItem() {
  let list = this.parentNode;
  list.remove();
}

// for (let delButton of delButtons) {
//   delButton.addEventListener("click", () => {
//     let list = this.parentNode;
//     list.parentNode.remove(this);
//   });
// }
