function changeBg() {
  const bgCount = 6;
  let ranNum = Math.floor(Math.random() * bgCount) + 1;
  document.body.style.backgroundImage = `url(../../../../../images/IU${ranNum}.jpeg)`;
}
// document.addEventListener("load", changeBg());
document.onload = changeBg();
