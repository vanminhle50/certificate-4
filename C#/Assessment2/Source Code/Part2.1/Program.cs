class Program
{
    static void Main(string[] args)
    {
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
            int choice = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("------------------------");

            Shape shape = null;

            switch (choice)
            {
                case 1:
                    Console.WriteLine("You selected | Square |");
                    Console.WriteLine("-------------------------");
                    Console.Write("Enter side length: ");
                    double squareSide = Convert.ToDouble(Console.ReadLine());
                    shape = new Square(squareSide);
                    break;

                case 2:
                    Console.WriteLine("You selected | Rectangle |");
                    Console.WriteLine("-------------------------");
                    Console.Write("Enter length: ");
                    double rectLength = Convert.ToDouble(Console.ReadLine());
                    Console.Write("Enter width: ");
                    double rectWidth = Convert.ToDouble(Console.ReadLine());
                    shape = new Rectangle(rectLength, rectWidth);
                    break;

                case 3:
                    Console.WriteLine("You selected | Circle |");
                    Console.WriteLine("-------------------------");
                    Console.Write("Enter radius: ");
                    double radius = Convert.ToDouble(Console.ReadLine());
                    shape = new Circle(radius);
                    break;

                case 4:
                    Console.WriteLine("You selected | Trapezoid |");
                    Console.WriteLine("-------------------------");
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
                    // Create a new Trapezoid object with the provided dimensions
                    shape = new Trapezoid(base1, base2, side1, side2, height);
                    break;

                case 5:
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
                int calcChoice = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("------------------------");
                double result = 0;

                if (calcChoice == 1)
                {
                    result = shape.Area();
                    Console.WriteLine($"The area is: {result:F2}");
                }
                else if (calcChoice == 2)
                {
                    result = shape.Perimeter();
                    Console.WriteLine($"The perimeter is: {result:F2}");
                }
                else if (calcChoice == 3)
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
                    Console.WriteLine("Would you like to calculate another property? (Press Y for Yes, or any other key to exit):");
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
