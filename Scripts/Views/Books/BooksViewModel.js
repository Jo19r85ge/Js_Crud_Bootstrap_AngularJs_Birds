class BooksViewModel
{
    constructor()
    {
        this.Title = "";
        this.Author = "";
        this.Age = 0;
        this.Isbn = 0;
        this.Books = [];
    }

    CreateBook()
    {
        let book = new Book();
        book.Title = this.Title;
        book.Author = this.Author;
        book.Age = this.Age;
        book.Isbn = this.Isbn;
        this.Books.push(book);
    }
}

app.component('books',
{
    templateUrl: './Scripts/Views/Books/BooksView.html',
    controller: BooksViewModel,
    controllerAs: "vm"
});

