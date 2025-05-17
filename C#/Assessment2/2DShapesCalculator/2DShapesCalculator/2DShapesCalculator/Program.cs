class Program
{
    static void Main(string[] args)
    {
        // Creat a method to check positive input.
        static double positiveInputCheck(string message)
        {
            Shape shape1 = new Shape();
            double value;
            do
            {
                Console.Write(message);
                if (double.TryParse(Console.ReadLine(), out value) && value > 0)
                    return value;

                if (message == "Enter Radius:")
                {
                    shape1 = new Circle();
                    Console.WriteLine("------------------------------------------------");
                    Console.WriteLine("| The orginal radius of the circle is 1.0      |");
                    Console.WriteLine($"| The area is: {shape1.Area():F2}                            |");
                    Console.WriteLine($"| The perimeter is: {shape1.Perimeter():F2}                       |");
                    Console.WriteLine("------------------------------------------------");
                }
                else if (message == "Enter Square Side Length:")
                {
                    shape1 = new Square();
                    Console.WriteLine("------------------------------------------------");
                    Console.WriteLine("| The orginal side of the square is 1.0        |");
                    Console.WriteLine($"| The area is: {shape1.Area():F2}                            |");
                    Console.WriteLine($"| The perimeter is: {shape1.Perimeter():F2}                       |");
                    Console.WriteLine("------------------------------------------------");
                }
                else if (message == "Enter Rectangle Length:" || message == "Enter Rectangle Width:")
                {
                    shape1 = new Rectangle();
                    Console.WriteLine("------------------------------------------------");
                    Console.WriteLine("| The orginal length of the rectangle is 1.0   |");
                    Console.WriteLine($"| The area is: {shape1.Area():F2}                            |");
                    Console.WriteLine($"| The perimeter is: {shape1.Perimeter():F2}                       |");
                    Console.WriteLine("------------------------------------------------");
                }
                else if (message == "Enter Base 01:" || message == "Enter Base 02:" || message == "Enter Height:" || message == "Enter Side 01:" || message == "Enter Side 02:")
                {
                    shape1 = new Trapezoid();
                    Console.WriteLine("------------------------------------------------");
                    Console.WriteLine("| The orginal base 01 of the trapezoid is 1.0  |");
                    Console.WriteLine($"| The area is: {shape1.Area():F2}                            |");
                    Console.WriteLine($"| The perimeter is: {shape1.Perimeter():F2}                       |");
                    Console.WriteLine("------------------------------------------------");
                }
                Console.WriteLine("The demention must be a non-negative number. Please try again!");

            } while (true);
        }

        bool exit = false;

        while (!exit)
        {
            Console.Clear();
            Console.WriteLine("------------------------");
            Console.WriteLine("| 2D Shapes Calculator |");
            Console.WriteLine("------------------------");
            Console.WriteLine("| 1. Square            |");
            Console.WriteLine("| 2. Rectangle         |");
            Console.WriteLine("| 3. Circle            |");
            Console.WriteLine("| 4. Trapezoid         |");
            Console.WriteLine("------------------------");
            Console.WriteLine("| 5. Exit              |");
            Console.WriteLine("------------------------");
            Console.Write("Can you please select a case (1-5): ");
            string choice = Console.ReadLine();
            Console.WriteLine("------------------------");

            Shape shape = null;

            switch (choice)
            {
                case "1":
                    Console.WriteLine("You selected | Square |");
                    Console.WriteLine("-------------------------");
                    double squareSide = positiveInputCheck("Enter Square Side Length:");
                    shape = new Square(squareSide);
                    break;
                case "2":
                    Console.WriteLine("You selected | Rectangle |");
                    Console.WriteLine("-------------------------");
                    double rectLength,
                        rectWidth;
                    rectLength = positiveInputCheck("Enter Rectangle Length:");
                    rectWidth = positiveInputCheck("Enter Rectangle Width:");
                    shape = new Rectangle(rectLength, rectWidth);
                    break;
                case "3":
                    Console.WriteLine("You selected | Circle |");
                    Console.WriteLine("-------------------------");
                    double radius = positiveInputCheck("Enter Radius:");
                    shape = new Circle(radius);
                    break;
                case "4":
                    Console.WriteLine("You selected | Trapezoid |");
                    Console.WriteLine("-------------------------");
                    double base1,
                        base2,
                        height,
                        side1,
                        side2;
                    do
                    {
                        base1 = positiveInputCheck("Enter Base 01:");
                        base2 = positiveInputCheck("Enter Base 02:");
                        height = positiveInputCheck("Enter Height:");
                        side1 = positiveInputCheck("Enter Side 01:");
                        side2 = positiveInputCheck("Enter Side 02:");
                        double d1 = Math.Sqrt(base1 * base1 - height * height);
                        double d2 = Math.Sqrt(base2 * base2 - height * height);

                        if (Math.Abs(base1 - base2) - (d1 + d2) <= 0)
                        {
                            Console.WriteLine("It is a Trapezoid. Choice a property!");
                            break;
                        }
                        else
                            Console.WriteLine("It is not a Trapezoid. Please try again.");
                    } while (true);

                    // Create a new Trapezoid object with the provided dimensions
                    shape = new Trapezoid(base1, base2, side1, side2, height);
                    break;

                case "5":
                    exit = true;
                    continue;

                default:
                    Console.WriteLine("Invalid choice. Press Enter to try again.");
                    Console.ReadLine();
                    continue;
            }

            bool backMenu = false;
            while (!backMenu)
            {
                Console.WriteLine("------------------------");
                Console.WriteLine("| Shape Calculation    |");
                Console.WriteLine("------------------------");
                Console.WriteLine("| 1. Area              |");
                Console.WriteLine("| 2. Perimeter         |");
                Console.WriteLine("------------------------");
                Console.WriteLine("| 3. Back to main menu |");
                Console.WriteLine("------------------------");
                Console.Write("Can you please select a case (1-3): ");
                string calcChoice = Console.ReadLine();
                Console.WriteLine("------------------------");
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
                else if (calcChoice == "3")
                {
                    backMenu = true;
                    break;
                }
                else
                {
                    Console.WriteLine("Invalid calculation choice.");
                }

                if (!backMenu)
                {
                    Console.WriteLine("------------------------");
                    Console.WriteLine(
                        "Would you like to calculate another property? (Press Y for Yes, or any other key to exit):"
                    );
                    string response = Console.ReadLine().ToLower();
                    if (response != "y")
                    {
                        backMenu = true;
                    }
                }
            }
        }
    }
}
