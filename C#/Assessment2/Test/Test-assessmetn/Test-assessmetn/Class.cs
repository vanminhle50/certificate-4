using System;

public abstract class Shape
{
    public string Name { get; protected set; }

    protected Shape(string name)
    {
        Name = name;
    }

    public abstract double Area();
    public abstract double Perimeter();

    public virtual void DisplayInfo()
    {
        Console.WriteLine($"Shape: {Name}");
        Console.WriteLine($"Area: {Area():F2}");
        Console.WriteLine($"Perimeter: {Perimeter():F2}");
    }
}

public class Circle : Shape
{
    public double Radius { get; }

    public Circle()
        : this(1.0) { }

    public Circle(double radius)
        : base("Circle")
    {
        if (radius <= 0)
            throw new ArgumentException("Radius must be positive");
        Radius = radius;
    }

    public override double Area() => Math.PI * Radius * Radius;

    public override double Perimeter() => 2 * Math.PI * Radius;

    public override void DisplayInfo()
    {
        base.DisplayInfo();
        Console.WriteLine($"Radius: {Radius:F2}");
    }
}

public class Rectangle : Shape
{
    public double Length { get; }
    public double Width { get; }

    public Rectangle()
        : this(1.0, 1.0) { }

    public Rectangle(double length, double width)
        : base("Rectangle")
    {
        if (length <= 0 || width <= 0)
            throw new ArgumentException("Dimensions must be positive");

        Length = length;
        Width = width;
    }

    public override double Area() => Length * Width;

    public override double Perimeter() => 2 * (Length + Width);

    public override void DisplayInfo()
    {
        base.DisplayInfo();
        Console.WriteLine($"Length: {Length:F2}, Width: {Width:F2}");
    }
}

public class Square : Rectangle
{
    public Square()
        : this(1.0) { }

    public Square(double side)
        : base(side, side)
    {
        Name = "Square";
    }

    public override void DisplayInfo()
    {
        Console.WriteLine($"Shape: {Name}");
        Console.WriteLine($"Side Length: {Length:F2}");
        Console.WriteLine($"Area: {Area():F2}");
        Console.WriteLine($"Perimeter: {Perimeter():F2}");
    }
}

public class Trapezoid : Shape
{
    public double Base1 { get; }
    public double Base2 { get; }
    public double Side1 { get; }
    public double Side2 { get; }
    public double Height { get; }

    public Trapezoid()
        : this(1.0, 1.0, 1.0, 1.0, 1.0) { }

    public Trapezoid(double base1, double base2, double side1, double side2, double height)
        : base("Trapezoid")
    {
        if (base1 <= 0 || base2 <= 0 || side1 <= 0 || side2 <= 0 || height <= 0)
            throw new ArgumentException("All dimensions must be positive");

        Base1 = base1;
        Base2 = base2;
        Side1 = side1;
        Side2 = side2;
        Height = height;
    }

    public override double Area() => (Base1 + Base2) / 2 * Height;

    public override double Perimeter() => Base1 + Base2 + Side1 + Side2;

    public override void DisplayInfo()
    {
        base.DisplayInfo();
        Console.WriteLine($"Bases: {Base1:F2}, {Base2:F2}");
        Console.WriteLine($"Sides: {Side1:F2}, {Side2:F2}");
        Console.WriteLine($"Height: {Height:F2}");
    }
}
