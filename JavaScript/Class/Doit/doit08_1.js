const bttn = document.querySelector("button");
const popWidth = 600;
const popHeight = 300;

bttn.addEventListener("click", () => {
  let left = (screen.availWidth - popWidth) / 2;
  let top = (screen.availHeight - popHeight) / 2;

  const windowFeatures = `width=${popWidth},height=${popHeight},left=${left},top=${top},toolbar=yes,resizable=no`;
  window.open("./doit08_notice.html", "event", windowFeatures);
});
