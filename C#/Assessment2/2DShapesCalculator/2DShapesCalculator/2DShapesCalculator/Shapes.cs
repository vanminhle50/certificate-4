public class Shape
{
    // Name of the shape
    protected string name;
    // Constructor to initialize the name
    public Shape()
    {
        name = "Unknown Shape";
    }
    // Constructor to initialize the name with a specific value
    public Shape(string name)
    {
        this.name = name;
    }
    // Virtual method to calculate the area of the shape
    public virtual double Area()
    {
        return 0.0; // Default implementation returns 0
    }
    // Virtual method to calculate the perimeter of the shape
    public virtual double Perimeter()
    {
        return 0.0; // Default implementation returns 0
    }
}

// Derived class for Circle
public class Circle : Shape
{
    // Radius of the circle
    private double radius;
    // Constructor to initialize the name
    public Circle() : base("Circle")
    {
        radius = 1.0; // Default radius when no value is provided
    }

    // Constructor to initialize the radius and name
    public Circle(double radius) : base("Circle")
    {
        if (radius <= 0)
        {
            throw new ArgumentException("Radius must be positive.");
        }
        this.radius = radius;
    }
    // Override method to calculate the area of the circle
    public override double Area()
    {
        return Math.PI * radius * radius; // Area = PI * r^2
    }
    // Override method to calculate the perimeter of the circle
    public override double Perimeter()
    {
        return 2 * Math.PI * radius; // Perimeter = 2 * PI * r
    }
}
// Derived class for Rectangle
public class Rectangle : Shape
{
    // Length and width of the rectangle
    private double length;
    private double width;
    // Constructor to initialize the name
    public Rectangle() : base("Rectangle")
    {
        length = 1.0; // Default length when no value is provided
        width = 1.0; // Default width when no value is provided
    }
    // Constructor to initialize the length, width, and name
    public Rectangle(double length, double width) : base("Rectangle")
    {
        if (length <= 0 || width <= 0)
        {
            throw new ArgumentException("Length and width must be positive.");
        }
        this.length = length;
        this.width = width;
    }
    // Override method to calculate the area of the rectangle
    public override double Area()
    {
        return length * width; // Area = length * width
    }
    // Override method to calculate the perimeter of the rectangle
    public override double Perimeter()
    {
        return 2 * (length + width); // Perimeter = 2 * (length + width)
    }
}
// Derived class for Square
public class Square : Rectangle
{
    // Constructor to initialize the name
    public Square() : base(1.0, 1.0) // Default side length when no value is provided
    {
        name = "Square"; 
    }
    // Constructor to initialize the side length and name
    public Square(double side) : base(side, side)
    {
        if (side <= 0)
        {
            throw new ArgumentException("Side length must be positive.");
        }
        name = "Square"; 
    }
    // Override method to calculate the area of the square
    public override double Area()
    {
        return base.Area(); // Calls the Rectangle's Area method
    }
    // Override method to calculate the perimeter of the square
    public override double Perimeter()
    {
        return base.Perimeter(); // Calls the Rectangle's Perimeter method
    }
}
// Derived class for Trapezoid
public class Trapezoid : Shape
{

    // Base lengths and side lengths
    private double base1;
    private double base2;
    private double side1;
    private double side2;
    // Height of the trapezoid
    private double height;
    // Constructor to initialize the name
    public Trapezoid() : base("Trapezoid")
    {
        base1 = 1.0;
        base2 = 1.0;
        side1 = 1.0;
        side2 = 1.0;
        height = 1.0;
    }
    // Constructor to initialize the base lengths, side lengths, height and name
    public Trapezoid(double base1, double base2, double side1, double side2, double height) : base("Trapezoid")
    {
        if (base1 <= 0 || base2 <= 0 || side1 <= 0 || side2 <= 0 || height <= 0)
        {
            throw new ArgumentException("Base lengths, side lengths, and height must be positive.");
        }
        this.base1 = base1;
        this.base2 = base2;
        this.side1 = side1;
        this.side2 = side2;
        this.height = height;
    }
    // Override method to calculate the area of the trapezoid
    public override double Area()
    {
        return ((base1 + base2) / 2) * height; // Area = (b1 + b2) / 2 * h
    }
    // Override method to calculate the perimeter of the trapezoid
    public override double Perimeter()
    {
        return base1 + base2 + side1 + side2;// Perimeter = b1 + b2 + s1 + s1
    }
}