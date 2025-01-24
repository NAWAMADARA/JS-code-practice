function Book(title, author, pages, read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info = function(){
        console.log(title, author, pages, read)
    }
}

    const book = new Book("Vagabond", "Shahzad.","97", "I havent read it yet");
    const book2 = new Book("anything", "shahzad", "97", "not read");
//book.info();
const myLibrary = [{
    book
}];
myLibrary.push(book2)
console.log(myLibrary)
