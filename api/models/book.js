class Book {
    constructor(bookData) {
        const { title, author, genre } = bookData ?? { title: null, author: null, genre: null };
        this.title = title;
        this.author = author;
        this.genre = genre;
    }

    isValid() {
        return this.title && this.author && this.genre
    }

    getData() {
        return { title: this.title, author: this.author, genre: this. genre };
    }
}

module.exports = Book;
