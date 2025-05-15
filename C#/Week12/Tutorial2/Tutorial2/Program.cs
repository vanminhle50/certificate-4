using System.Net;

var database = new DBInterface();
while (true)
{
    Console.WriteLine("Holmesglen Library");
    Console.WriteLine("1. All Books");
    Console.WriteLine("2. One Books");
    Console.WriteLine("3. Exit");
    Console.Write("Please select an option: ");
    var input = Console.ReadLine();
    if (input == "1")
    {
        var books = database.ReadAll();
        foreach (var book in books)
        {
            Console.WriteLine(
                "BookID: "
                    + book.BookID
                    + " Title: "
                    + book.Title
                    + " Author: "
                    + book.Author
                    + " Published Year: "
                    + book.PublishedYear
            );
        }
    }
    else if (input == "2")
    {
        // Read one book from the database by id
        Console.Write("Please enter The Book ID: ");
        int bookid = Int32.Parse(Console.ReadLine());
        Book book = database.ReadOne(bookid);
        if (book != null)
        {
            Console.WriteLine(
                "BookID: "
                    + book.BookID
                    + " Title: "
                    + book.Title
                    + " Author: "
                    + book.Author
                    + " Published Year: "
                    + book.PublishedYear
            );
        }
    }
    else if (input == "3")
    {
        break;
    }
}
Console.WriteLine("Goodbye!");
