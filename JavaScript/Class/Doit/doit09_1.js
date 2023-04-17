function Book(title, pages, done = false) {
  this.a = title;
  this.pages = pages;
  this.done = done;
  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는중") : (str = "완독");
    return str;
  };
}

const book1 = new Book("웹 표준의 정석", 648, false);
const book2 = new Book("점프 투 파이썬", 360, true);

console.log(book1);
console.log(book2);

class Book2{
  constructor(title,pages,done){
    title,pages,done;
  }
  finish(){
    let str;
    this.done===false ? (str="읽는중"):(str="완독")
    return str;
  }
}