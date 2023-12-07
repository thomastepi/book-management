class Book {
  static numberOfCreatedBooks = 0;

  constructor(title, author, ISBN, price) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.price = price;
    Book.numberOfCreatedBooks++;
  }

  modifyAttribute(attribute, value) {
    this[attribute] = value;
  }

  getAttributeValue(attribute) {
    return this[attribute];
  }

  findNumberOfCreatedBooks() {
    return Book.numberOfCreatedBooks;
  }

  // Method to compare two Book objects for equality
  equals(otherBook) {
    return this.ISBN === otherBook.ISBN && this.price === otherBook.price;
  }

  displayInfo() {
    console.log(`
        Title: ${this.title}
        Author: ${this.author}
        ISBN: ${this.ISBN}
        Price: ${this.price}
      `);
  }
}

export default Book;
