using System;
using System.IO;

namespace week2
{
    internal class convertTemperature
    {
        static void Main(string[] args)
        {
            /*-------------------------------------------------------------------------------------
             Console.WriteLine("Enter your name please!");
             string name = Console.ReadLine();
             Console.WriteLine("Hello" + name + " welcome");
             Console.WriteLine("Enter amount $AUD: ");
             float amout = float.Parse(Console.ReadLine());
             Console.WriteLine("Enter rate 1AUD =? USD ");
             float rate = float.Parse(Console.ReadLine());
             Console.WriteLine(amout + "AUD =" + Math.Round((amout * rate), 2) + "USD");
            -------------------------------------------------------------------------------------*/
             
            string userInput;

            do
            {
                Console.WriteLine(
                    "Enter C to convert from Celsius to Fahrenheit, or enter F to convert from Fahrenheit to Celsius."
                );
                Console.WriteLine("Enter X to Exit");

                userInput = Console.ReadLine().ToUpper();

                if (userInput == "X")
                {
                    Console.WriteLine("You exited.");
                    return;
                }

                if (userInput == "C")
                {
                    Console.WriteLine("Convert C to F");
                    Console.WriteLine("Enter Celsius Temperature");
                    float c = float.Parse(Console.ReadLine());
                    float f = (c * 9 / 5) + 32;
                    Console.WriteLine(
                        "Result: " + Math.Round(c, 2) + "C = " + Math.Round(f, 2) + "F"
                    );
                }
                else if (userInput == "F")
                {
                    Console.WriteLine("Convert F to C");
                    Console.WriteLine("Enter Fahrenheit Temperature");
                    float f = float.Parse(Console.ReadLine());
                    float c = (f - 32) * 5 / 9;
                    Console.WriteLine(
                        "Result: " + Math.Round(f, 2) + "F = " + Math.Round(c, 2) + "C"
                    );
                }
                else
                {
                    Console.WriteLine("Invalid input. Please enter C, F, or X.");
                }
            } while (userInput != "X");

        }
    }
}
