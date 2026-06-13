const book = require("./Book");
class Member{
    constructor(mName,mLevel){
        this.mName = mName;
        this.mLevel = mLevel;
        this.pagesRead = 0 ; // counter for active learning 
    }
    studySession(pages){
        if(book.isAvailable){
            // changing book status from true to false
            book.isAvailable = false;
            this.pagesRead+=pages;
            console.log(`Study Session started: `);
            console.log(`Member ${this.mName} is reading ${book.title} title.`);
            console.log(`Pages read this session: ${pages}.Toatl pages read: ${this.pagesRead}`);
            console.log(`Book Status: ${book.checkOutStatus()}`);
        }else{
            console.log(`Sorry, ${book.title} is already being read by someone else.`);
        }
    }
    display(){
        console.log(`Book Details:\n ${book.showDetails()}`);
        console.log(`Membership Name:\n ${this.mName}, Membership Level: ${this.mLevel}`);
        console.log(`Current availability:\n ${book.checkOutStatus()}`);
    }
}
const m1 = new Member('Roman','Gold');
m1.display();
m1.studySession(45);
console.log(`Final Check: Is the book available? ${book.isAvailable}`);