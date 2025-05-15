// a menu system with two options
// option 1 - all-products - read all products from the database
// option 2 - one-product - read one product from the database by id

var database = new DBInterface();

while (true)
{
    Console.WriteLine("\nWelcome to MyShop!");
    Console.WriteLine("1. All Products");
    Console.WriteLine("2. One Product");
    Console.WriteLine("3. Exit");
    Console.Write("Please select an option: ");
    var input = Console.ReadLine();
    if (input == "1")
    {
        // read all products from the database
        //database.ReadAll();
        var products = database.ReadAll();
        foreach (var product in products)
        {
            Console.WriteLine(
                product.ProductId
                    + " "
                    + product.Name
                    + " "
                    + product.Description
                    + " "
                    + product.Price
            );
        }
    }
    else if (input == "2")
    {
        // read one product from the database by id
        Console.Write("Please enter the product id: ");
        int id = Int32.Parse(Console.ReadLine());
        Product product = database.ReadOne(id);
        if (product != null)
        {
            Console.WriteLine("Product:");
            Console.WriteLine(
                product.ProductId
                    + " "
                    + product.Name
                    + " "
                    + product.Description
                    + " "
                    + product.Price
            );
        }
        else
        {
            Console.WriteLine("Product not found.");
        }
    }
    else if (input == "3")
    {
        break;
    }
}
Console.WriteLine("Goodbye!");
