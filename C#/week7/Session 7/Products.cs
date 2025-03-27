class Products
{
    private string name;
    private double price;

    public string Name
    {
        //get { return name; }
        set { name = value; }
    }
    public double Price
    {
        get { return price; }
        set { price = value; }
    }

    public void Print()
    {
        Console.WriteLine($"Name: {Name}");
        Console.WriteLine($"Price: {Price}");
    }
}

class Food : Products
{
    private DateTime expiry;
    public DateTime Expiry
    {
        get { return expiry; }
        set { expiry = value; }
    }

    public void Print()
    {
        Console.WriteLine("Food Information");
        base.Print();
        Console.WriteLine($"Expiry day {Expiry.ToString("dd/MM/yyyy")}");
    }
}

class Clothes : Products
{
    public string Size;
    public double Colour;

    public void Print()
    {
        Console.WriteLine("Clothes Information");
        base.Print();
        Console.WriteLine($"Size: {Size}");
        Console.WriteLine($"Colour {Colour}");
    }
}
