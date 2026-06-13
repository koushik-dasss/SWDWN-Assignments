class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true; // checks availability 
    }
    showDetails(){
        return `Title of the book: ${this.title},Author of the book: ${this.author},ISBN of the book: ${this.isbn}`
    }
    // Returns Availability Status
    checkOutStatus(){
        return this.isAvailable ? "Available" : "Checked Out";
    }
}
module.exports = new Book("Node.JS","John Cena",987-1564231);