using Microsoft.Data.Sqlite;
using static System.Reflection.Metadata.BlobBuilder;

class DBInterface
{
    public List<Book> ReadAll()
    {
        // Create empty list of books
        List<Book> books = new List<Book>();
        //Define the connection string
        string connectionString =
            @"Data Source=C:\certificate-4\certificate-4\C#\Week12\Library_DB.db";
        // Creating a connection to the database
        var connection = new SqliteConnection(connectionString);
        // Opening connection
        connection.Open();
        // Creating a command to execute SQL queries to retrieve all data from table Books.
        var command = connection.CreateCommand();
        // Definne SQL query to retrieve all data from the book table.
        command.CommandText =
            @"
                              SELECT *
                              FROM Books ";
        // Executing the command and reading the data.
        var reader = command.ExecuteReader();
        // Interating through the results.
        while (reader.Read())
        {
            var bookid = reader.GetInt32(0);
            var title = reader.GetString(1);
            var author = reader.GetString(2);
            var publishedyear = reader.GetInt32(3);
            // Shows data to console
            // Console.WriteLine("BookID: " + bookid + "Title: " + title + "Author: " + author + "Published Year: " + publishedyear);
            // Push book to Book List
            books.Add(new Book(bookid, title, author, publishedyear));
        }
        // Close the reader and the connection
        reader.Close();
        connection.Close();
        // Return Books
        return books;
    }

    public Book ReadOne(int bookid)
    {
        Book book = null;
        //Define the connection string
        string connectionString =
            @"Data Source=C:\certificate-4\certificate-4\C#\Week12\Library_DB.db";
        // Creating a connection to the database
        var connection = new SqliteConnection(connectionString);
        // Opening connection
        connection.Open();
        // Creating a command to execute SQL queries to retrieve all data from table Books.
        var command = connection.CreateCommand();
        // Definne SQL query to retrieve all data from the book table.
        command.CommandText =
            $@"
                              SELECT *
                              FROM Books 
                              WHERE BookId = {bookid}";
        // Executing the command and reading the data.
        var reader = command.ExecuteReader();
        // Interating through the results.
        while (reader.Read())
        {
            var bookId = reader.GetInt32(0);
            var title = reader.GetString(1);
            var author = reader.GetString(2);
            var publishedyear = reader.GetInt32(3);
            // Shows data to console
            // Console.WriteLine("BookID: " + bookid + "Title: " + title + "Author: " + author + "Published Year: " + publishedyear);
            // Push book to Book List
            book = new Book(bookId, title, author, publishedyear);
        }
        // Close the reader and the connection
        reader.Close();
        connection.Close();
        return book;
    }
}
