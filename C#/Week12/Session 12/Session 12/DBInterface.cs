using Microsoft.Data.Sqlite;

class DBInterface
{
    public List<Product> ReadAll()
    {
        // Read all from table Products
        //Create the empty list of products
        // defining the connection string
        List<Product> products = new List<Product>();
        string connectionString =
            @"Data Source=C:\certificate-4\certificate-4\C#\Week12\Online_Shop_DB.db";

        // creating a connection to the database
        var connection = new SqliteConnection(connectionString);

        // opening the connection
        connection.Open();

        // creating a command to execute SQL queries to retrieve all data from table products
        var command = connection.CreateCommand();

        // define the SQL query to retrieve all data from the products table
        command.CommandText =
            @"
            SELECT *
            FROM Products
        ";

        // executing the command and reading the data
        var reader = command.ExecuteReader();

        // iterating through the results
        while (reader.Read())
        {
            var productId = reader.GetInt32(0); // accessing the data using the column index
            var name = reader.GetString(1); // accessing the data using the column index
            var description = reader.GetString(2); // accessing the data using the column index
            var price = reader.GetDecimal(3); // accessing the data using the column index

            // printing the data to the console
            // Console.WriteLine(productId + " " + name + " " + description + " " + price);
            products.Add(new Product(productId, name, description, (double)price));
        }

        // closing the reader and the connection
        reader.Close();
        connection.Close();
        return products;
    }
}
