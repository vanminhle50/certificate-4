class Program
{
    static void Main(string[] args)
    {
        // Creat a method to check positive input.
        static double positiveInputCheck(string message)
        {
            // Create a shape.
            Shape shape = new Shape();
            // Define value input variable
            double value;
            do
            {
                // Print a message to the console prompting the user to enter input
                Console.Write(message);
                // Check if parsing input to double is successful and the value is greater than 0,
                // then return value
                if (double.TryParse(Console.ReadLine(), out value) && value > 0)
                    return value;
                else
                    // Print a message to the console informing the user that the input must be positive
                    Console.WriteLine(
                        "The demention must be a non-negative number. Please try again!"
                    );
            } while (true);
        }
        // Define the condition that controls the loop for menu
        bool exit = false;
        bool backMenu = false;
        // Loop to display and handle 2D Shapes Calculator menu options.
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
            // Initialize the shape as null to use in the program
            Shape shape = null;

            switch (choice)
            {
                // Option 1: Create a Square object with side length.
                case "1":
                    Console.WriteLine("You selected | Square |");
                    Console.WriteLine("-------------------------");
                    // Read input side length and validate it is positive using positiveInputCheck method
                    double squareSide = positiveInputCheck("Enter Square Side Length:");
                    // Catch errors if there is any problem initializing the square object
                    try
                    {
                        shape = new Square(squareSide);
                    }
                    catch (Exception e)
                    {
                        // Print the error to console and back to main menu
                        Console.WriteLine($"An Error occurs:{e.Message}");
                        backMenu = true;
                    }

                    break;
                // Option 2: Create a Rectangle object
                case "2":
                    Console.WriteLine("You selected | Rectangle |");
                    Console.WriteLine("-------------------------");
                    double rectLength,
                        rectWidth;
                    // Read input and validate it is positive using positiveInputCheck method.
                    rectLength = positiveInputCheck("Enter Rectangle Length:");
                    rectWidth = positiveInputCheck("Enter Rectangle Width:");
                    //Catch errors if there is any problem initializing the rectangle object.
                    try
                    {
                        shape = new Rectangle(rectLength, rectWidth);
                    }
                    catch (Exception e)
                    {
                        // Print the error to console and back to main menu.
                        Console.WriteLine($"Error occur:{e.Message}");
                        backMenu = true;
                    }
                    break;
                // Option 3: Create a Crirle object.
                case "3":
                    Console.WriteLine("You selected | Circle |");
                    Console.WriteLine("-------------------------");
                    // Read input radius and validate it is positive using positiveInputCheck method.
                    double radius = positiveInputCheck("Enter Radius:");
                    // Catch errors if there is any problem initializing the circle object
                    try
                    {
                        shape = new Circle(radius);
                    }
                    catch (Exception e)
                    {
                        // Print the error to console and back to main menu.
                        Console.WriteLine($"Error occur:{e.Message}");
                        backMenu = true;
                    }
                    break;
                // Option 4: Create a Trapezoid object.
                case "4":
                    Console.WriteLine("You selected | Trapezoid |");
                    Console.WriteLine("-------------------------");
                    double base1,
                        base2,
                        height,
                        side1,
                        side2;
                    // Do-while loop to read input and validate it is positive using the positiveInputCheck method
                    // if the input is valid, check if it is a trapezoid
                    do
                    {
                        base1 = positiveInputCheck("Enter Base 01:");
                        base2 = positiveInputCheck("Enter Base 02:");
                        height = positiveInputCheck("Enter Height:");
                        side1 = positiveInputCheck("Enter Side 01:");
                        side2 = positiveInputCheck("Enter Side 02:");
                        // Check if it is a trapezoid
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
                    // Catch errors if there is any problem initializing the trapezoid object
                    try
                    {
                        // Create a new Trapezoid object with the provided dimensions
                        shape = new Trapezoid(base1, base2, side1, side2, height);
                    }
                    catch (Exception e)
                    {
                        // Print the error to console and back to main menu.
                        Console.WriteLine($"Error occur:{e.Message}");
                        backMenu = true;
                    }
                    break;
                // Option 5: Exit the main menu (Program)
                case "5":
                    exit = true;
                    continue;

                default:
                    Console.WriteLine("Invalid choice. Press Enter to try again.");
                    Console.ReadLine();
                    continue;
            }
            // Loop to display and perform Shape Calculation menu options.
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
                // Define a variable to store the result for displaying on the console
                double result = 0;
                // Perform area calculation for the chosen shape.
                if (calcChoice == "1")
                {
                    result = shape.Area();
                    Console.WriteLine($"The area is: {result:F2}");
                }
                // Perform perimeter calculation for the chosen shape.
                else if (calcChoice == "2")
                {
                    result = shape.Perimeter();
                    Console.WriteLine($"The perimeter is: {result:F2}");
                }
                // Exit this menu and back to the main menu
                else if (calcChoice == "3")
                {
                    backMenu = true;
                    break;
                }
                else
                {
                    // Print a message when the user chooses an option out of range
                    Console.WriteLine("Invalid calculation choice.");
                }
                // Ask the user if they want to continue calculating or finish and return to the main menu
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
