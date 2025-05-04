class Program
{
    static void Main(string[] args)
    {
        bool exit = false;

        while (!exit)
        {
            Console.WriteLine("===== 2D Shapes Calculator =====");
            Console.WriteLine("1. Square");
            Console.WriteLine("2. Rectangle");
            Console.WriteLine("3. Circle");
            Console.WriteLine("4. Trapezoid");
            Console.WriteLine("5. Exit");
            Console.Write("Select a shape (1-5): ");
            string choice = Console.ReadLine();

            Shape shape = null;

            switch (choice)
            {
                case "1":
                    Console.Write("Enter side length: ");
                    double squareSide = Convert.ToDouble(Console.ReadLine());
                    shape = new Square(squareSide);
                    break;

                case "2":
                    Console.Write("Enter length: ");
                    double rectLength = Convert.ToDouble(Console.ReadLine());
                    Console.Write("Enter width: ");
                    double rectWidth = Convert.ToDouble(Console.ReadLine());
                    shape = new Rectangle(rectLength, rectWidth);
                    break;

                case "3":
                    Console.Write("Enter radius: ");
                    double radius = Convert.ToDouble(Console.ReadLine());
                    shape = new Circle(radius);
                    break;

                case "4":
                    Console.Write("Enter base1: ");
                    double base1 = Convert.ToDouble(Console.ReadLine());
                    Console.Write("Enter base2: ");
                    double base2 = Convert.ToDouble(Console.ReadLine());
                    Console.Write("Enter height: ");
                    double height = Convert.ToDouble(Console.ReadLine());
                    Console.Write("Enter side1: ");
                    double side1 = Convert.ToDouble(Console.ReadLine());
                    Console.Write("Enter side2: ");
                    double side2 = Convert.ToDouble(Console.ReadLine());
                    shape = new Trapezoid(base1, base2, height);
                    break;

                case "5":
                    exit = true;
                    continue;

                default:
                    Console.WriteLine("Invalid choice. Press Enter to try again.");
                    Console.ReadLine();
                    continue;
            }

            Console.WriteLine("Choose calculation:");
            Console.WriteLine("1. Area");
            Console.WriteLine("2. Perimeter");
            Console.Write("Enter your choice (1-2): ");
            string calcChoice = Console.ReadLine();

            double result = 0;
            if (calcChoice == "1")
            {
                result = shape.Area();
                Console.WriteLine($"The area is: {result:F2}");
            }
            else if (calcChoice == "2")
            {
                result = shape.Perimeter();
                Console.WriteLine($"The perimeter is: {result:F2}");
            }
            else
            {
                Console.WriteLine("Invalid calculation choice.");
            }

            Console.WriteLine("Press Enter to continue...");
            Console.ReadLine();
        }
    }
}
