namespace Example1
{
    internal class Program
    {
        static double Subtraction(double x, double y)
        {
            return x - y;
        }

        static double Multiplication(double x, double y)
        {
            return x * y;
        }

        static double Division(double x, double y)
        {
            return x / y;
        }

        static double Addition(double x, double y)
        {
            return x + y;
        }

        static double ReadDouble(string prompt)
        {
            double number;
            while (true)
            {
                Console.WriteLine(prompt);
                try
                {
                    number = double.Parse(Console.ReadLine());

                    return number;
                }
                catch (Exception)
                {
                    Console.WriteLine("Your input is not a valid number! Please try again.");
                }
            }
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Enter two numbers to perform a math operation:");
            double a = ReadDouble("Number A");
            double b = ReadDouble("Number B");
            Console.WriteLine("A+B = " + a + " + " + b + " = " + Addition(a, b));
            Console.WriteLine("A-B = " + a + " - " + b + " = " + Subtraction(a, b));
            Console.WriteLine("A*B = " + a + " * " + b + " = " + Multiplication(a, b));
            Console.WriteLine("A/B = " + a + " / " + b + " = " + Math.Round(Division(a, b), 2));
            bool exit = false;
            while (!exit)
            {
                Console.WriteLine(
                    "--------------------------------------------------------------------"
                );
                Console.WriteLine("Enter numbers to perform a math operation");
                Console.WriteLine("+: Addition");
                Console.WriteLine("-: Subtraction");
                Console.WriteLine("*: Multiplication");
                Console.WriteLine("/: Division");
                Console.WriteLine("E: Enter E to Exit");
                Console.WriteLine("Your choise ");
                Console.WriteLine(
                    "--------------------------------------------------------------------"
                );
                string command = Console.ReadLine();
                switch (command)
                {
                    default:
                    {
                        Console.WriteLine("Invalid command. Please enter +, -, *, /, or E.");
                        break;
                    }
                    case "e"
                    or "E":
                        exit = true;
                        Console.WriteLine(" Exiting the program....");
                        break;
                    case "+":
                    {
                        Console.WriteLine("A+B = " + a + " + " + b + " = " + Addition(a, b));
                        break;
                    }
                    case "-":
                    {
                        Console.WriteLine("A-B = " + a + " - " + b + " = " + Subtraction(a, b));
                        break;
                    }
                    case "*":
                    {
                        Console.WriteLine("A*B = " + a + " * " + b + " = " + Multiplication(a, b));
                        break;
                    }
                    case "/":
                    {
                        Console.WriteLine(
                            "A/B = " + a + " / " + b + " = " + Math.Round(Division(a, b), 2)
                        );
                        break;
                    }
                }
            }
        }
    }
}
