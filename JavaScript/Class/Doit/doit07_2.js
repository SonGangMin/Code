let button = document.querySelector("button");

button.addEventListener("click", () => {
  let newImg = document.createElement("img");
  let srcImg = document.createAttribute("src");
  let h1 = document.querySelector("h1");
  let p = document.querySelectorAll("p")[0];
  console.log(srcImg);
  console.log(newImg);
  console.log(srcImg.value);
  srcImg.value = "../../../images/IU2.jpeg";
  console.log(srcImg);
  newImg.setAttributeNode(srcImg);
  console.log(newImg);
  document.body.insertBefore(newImg, p);
  h1.remove();
  p.remove();
});
