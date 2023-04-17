class Book{
    constructor(title, price){
        this.title = title;
        this.price = price;
    }
    buy(){
        console.log(`${this.title}을 ${this.price}원에 구매했습니다.`);
    }
}

const book1 = new Book("자료구조", 15000);
book1.buy();

class TextBook extends Book{
    constructor(title,price,major){
        super(title,price);
        this.major = major;
    }
    buyTextBook(){
        console.log(`${this.major}전공서적, ${this.title}을 구매했습니다. 가격은 ${this.price}입니다`);
    }
}

const book2 = new TextBook("인공지능",5000,"컴퓨터공학")
book2.buy();
book2.buyTextBook();