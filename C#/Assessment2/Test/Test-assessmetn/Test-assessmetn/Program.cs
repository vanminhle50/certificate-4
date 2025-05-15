using System;
using System.Collections.Generic;
using System.Drawing;

class Program
{
    private static readonly Dictionary<string, string> shapeTitles = new Dictionary<string, string>
    {
        { "1", "Square" },
        { "2", "Rectangle" },
        { "3", "Circle" },
        { "4", "Trapezoid" }
    };

    static void Main(string[] args)
    {
        var history = new CalculationHistory();
        var ui = new UserInterface();
        var calculator = new ShapeCalculator(ui, history);

        while (true)
        {
            ui.DisplayMainMenu();
            string choice = ui.GetUserChoice("Select a shape (1-5): ", 1, 5);

            if (choice == "5")
                break;

            try
            {
                calculator.ProcessShapeCalculation(choice);
            }
            catch (Exception ex)
            {
                ui.DisplayError(ex.Message);
                ui.PressAnyKeyToContinue();
            }
        }

        ui.DisplayGoodbyeMessage();
    }
}

public class ShapeCalculator
{
    private readonly UserInterface _ui;
    private readonly CalculationHistory _history;

    public ShapeCalculator(UserInterface ui, CalculationHistory history)
    {
        _ui = ui;
        _history = history;
    }

    public void ProcessShapeCalculation(string choice)
    {
        Shape shape = CreateShape(choice);
        if (shape == null)
            return;

        while (true)
        {
            _ui.DisplayCalculationMenu(shape.GetType().Name);
            string calcChoice = _ui.GetUserChoice("Select calculation (1-3): ", 1, 3);

            if (calcChoice == "3")
                break;

            double result = calcChoice == "1" ? shape.Area() : shape.Perimeter();
            string property = calcChoice == "1" ? "Area" : "Perimeter";

            _ui.DisplayResult($"{property}: {result:F2}");
            _history.AddRecord(shape, property, result);

            if (!_ui.AskToContinue("Calculate another property? (Y/N): "))
                break;
        }
    }

    private Shape CreateShape(string choice)
    {
        switch (choice)
        {
            case "1":
                double side = _ui.GetPositiveInput("Enter square side length: ", new Square());
                return new Square(side);

            case "2":
                double length = _ui.GetPositiveInput("Enter rectangle length: ", new Rectangle());
                double width = _ui.GetPositiveInput("Enter rectangle width: ", new Rectangle());
                return new Rectangle(length, width);

            case "3":
                double radius = _ui.GetPositiveInput("Enter circle radius: ", new Circle());
                return new Circle(radius);

            case "4":
                return CreateTrapezoid();

            default:
                return null;
        }
    }

    private Trapezoid CreateTrapezoid()
    {
        while (true)
        {
            double base1 = _ui.GetPositiveInput("Enter base 1: ", new Trapezoid());
            double base2 = _ui.GetPositiveInput("Enter base 2: ", new Trapezoid());
            double height = _ui.GetPositiveInput("Enter height: ", new Trapezoid());
            double side1 = _ui.GetPositiveInput("Enter side 1: ", new Trapezoid());
            double side2 = _ui.GetPositiveInput("Enter side 2: ", new Trapezoid());

            if (TrapezoidValidator.IsValid(base1, base2, height, side1, side2))
            {
                return new Trapezoid(base1, base2, side1, side2, height);
            }

            _ui.DisplayError("Invalid trapezoid dimensions. Please try again.");
        }
    }
}

public static class TrapezoidValidator
{
    public static bool IsValid(
        double base1,
        double base2,
        double height,
        double side1,
        double side2
    )
    {
        double d1 = Math.Sqrt(Math.Pow(side1, 2) - Math.Pow(height, 2));
        double d2 = Math.Sqrt(Math.Pow(side2, 2) - Math.Pow(height, 2));

        return Math.Abs(base1 - base2) >= Math.Abs(d1 - d2) && Math.Abs(base1 - base2) <= (d1 + d2);
    }
}

public class UserInterface
{
    public void DisplayMainMenu()
    {
        Console.Clear();
        Console.ForegroundColor = ConsoleColor.Cyan;
        Console.WriteLine("================================");
        Console.WriteLine("||    2D Shapes Calculator    ||");
        Console.WriteLine("================================");
        Console.WriteLine("|| 1. Square                  ||");
        Console.WriteLine("|| 2. Rectangle               ||");
        Console.WriteLine("|| 3. Circle                  ||");
        Console.WriteLine("|| 4. Trapezoid               ||");
        Console.WriteLine("================================");
        Console.WriteLine("|| 5. Exit                    ||");
        Console.WriteLine("================================");
        Console.ResetColor();
    }

    public void DisplayCalculationMenu(string shapeName)
    {
        Console.WriteLine("\n================================");
        Console.WriteLine($" {shapeName} Calculations");
        Console.WriteLine("================================");
        Console.WriteLine("|| 1. Area                    ||");
        Console.WriteLine("|| 2. Perimeter               ||");
        Console.WriteLine("================================");
        Console.WriteLine("|| 3. Back to main menu       ||");
        Console.WriteLine("================================");
    }

    public string GetUserChoice(string prompt, int min, int max)
    {
        while (true)
        {
            Console.Write(prompt);
            string input = Console.ReadLine();

            if (int.TryParse(input, out int choice) && choice >= min && choice <= max)
            {
                return choice.ToString();
            }

            DisplayError($"Please enter a number between {min} and {max}.");
        }
    }

    public double GetPositiveInput(string prompt, Shape defaultShape)
    {
        while (true)
        {
            Console.Write(prompt);
            string input = Console.ReadLine();

            if (double.TryParse(input, out double value) && value > 0)
            {
                return value;
            }

            DisplayDefaultShapeInfo(defaultShape);
            DisplayError("Value must be a positive number. Please try again.");
        }
    }

    private void DisplayDefaultShapeInfo(Shape shape)
    {
        Console.ForegroundColor = ConsoleColor.Yellow;
        Console.WriteLine("\n--------------------------------");
        Console.WriteLine($"| Default {shape.GetType().Name} dimensions:");
        Console.WriteLine($"| Area: {shape.Area():F2}");
        Console.WriteLine($"| Perimeter: {shape.Perimeter():F2}");
        Console.WriteLine("--------------------------------");
        Console.ResetColor();
    }

    public void DisplayResult(string message)
    {
        Console.ForegroundColor = ConsoleColor.Green;
        Console.WriteLine($"\n{message}");
        Console.ResetColor();
    }

    public void DisplayError(string message)
    {
        Console.ForegroundColor = ConsoleColor.Red;
        Console.WriteLine($"\nError: {message}");
        Console.ResetColor();
    }

    public bool AskToContinue(string prompt)
    {
        Console.Write(prompt);
        return Console.ReadLine().Trim().ToUpper() == "Y";
    }

    public void PressAnyKeyToContinue()
    {
        Console.WriteLine("\nPress any key to continue...");
        Console.ReadKey();
    }

    public void DisplayGoodbyeMessage()
    {
        Console.ForegroundColor = ConsoleColor.Cyan;
        Console.WriteLine("\nThank you for using 2D Shapes Calculator!");
        Console.WriteLine("Goodbye!");
        Console.ResetColor();
    }
}

public class CalculationHistory
{
    private readonly List<string> _records = new List<string>();

    public void AddRecord(Shape shape, string property, double result)
    {
        string record =
            $"{DateTime.Now:yyyy-MM-dd HH:mm:ss} - {shape.GetType().Name}: {property} = {result:F2}";
        _records.Add(record);
    }

    public void DisplayHistory()
    {
        Console.WriteLine("\nCalculation History:");
        foreach (var record in _records)
        {
            Console.WriteLine(record);
        }
    }
}
