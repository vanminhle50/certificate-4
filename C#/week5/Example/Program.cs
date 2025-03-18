using System.ComponentModel.Design;
using System.Diagnostics.Metrics;
using System.Drawing;
using System.Net;
using System.Numerics;
using System.Security.Claims;
using System.Threading;
using System.Xml.Linq;
using Microsoft.VisualBasic;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Example
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /*
            //Activity 1: For a given array of numbers, calculate the sum and average of all values.
            Console.WriteLine("=========================Activity 1===========================");
            // Input array function
            static double[] GetInputArray()
            {
                while (true)
                {
                    Console.WriteLine("Enter numbers separated by spaces:");
                    string input = Console.ReadLine();
                    try
                    {
                        return Array.ConvertAll(input.Split(), double.Parse);
                        break;
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine(e.ToString());
                    }
                }
            }
            // Output array function
            static void PrintArray(double[] numbers)
            {
                foreach (double num in numbers)
                {
                    Console.Write(num + " ");
                }
                Console.WriteLine();
            }

            static double AverageArray(double[] Array)
            {
                double average = 0;
                for (int i = 0; i < Array.Length; i++)
                {
                    average = average + Array[i];
                }
                return average = average / Array.Length;
            }
            static double SumArray(double[] Array)
            {
                double sum = 0;
                for (int i = 0; i < Array.Length; i++)
                {
                    sum = sum + Array[i];
                }
                return sum;
            }

            // Call function
            double[] numbers = GetInputArray();
            Console.WriteLine("Your array:");
            PrintArray(numbers);
            Console.WriteLine("Sum of all values of your array: " + SumArray(numbers));
            Console.WriteLine("Average of all values of your array: " + AverageArray(numbers));

            //Activity 2: For the array in the previous activity, calculate the 3-point moving average, and store the results in a new array.
            //Hint: if the size of original array is n, then the size of new array is n-2.
            Console.WriteLine("=========================Activity 2===========================");
            // Function
            static double[] ThreepointArray(double[] Array)
            {
                double[] newArray = new double[Array.Length - 2];
                for (int i = 0; i < Array.Length - 2; i++)
                {
                    newArray[i] = (Array[i] + Array[i + 1] + Array[i + 2]) / 3;
                }
                return newArray;
            }
            // Call function
            Console.WriteLine("The new Array that it is calcutated form 3-point moving average: ");
            PrintArray(ThreepointArray(numbers));

            //Activity 3: For the array in the previous activity, search for all numbers greater than a given value, and display all of them.
            // Function
            Console.WriteLine("=========================Activity 3===========================");
            double SearchNumber;
            while (true)
            {
                try
                {
                    Console.WriteLine(
                        "Enter your number to search for all numbers of the array greater than a number value"
                    );
                    SearchNumber = Convert.ToDouble(Console.ReadLine());
                    break;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
            static void SearchOfArray(double[] Array, double SearchNumber)
            {
                Console.Write("Numbers greater than " + SearchNumber + ": [");
                for (int i = 0; i < Array.Length; i++)
                {
                    if (Array[i] > SearchNumber)
                    {
                        Console.Write(" " + Array[i] + " ");
                    }
                }
                Console.Write("]");
                Console.WriteLine();
            }
            SearchOfArray(numbers, SearchNumber);
            //Activity 4: You are required to found and store the first 20 Fibonacci number and store them in an array.
            Console.WriteLine("=========================Activity 4===========================");
            static double[] Fibonacci()
            {
                double[] Array = new double[20];
                Array[0] = 0;
                Array[1] = 1;

                for (int i = 2; i < Array.Length; i++)
                {
                    Array[i] = Array[i - 2] + Array[i - 1];
                }
                return Array;
            }
            Console.WriteLine("The first 20 Fibonacci numbers:");
            PrintArray(Fibonacci());

            //Activity5: Create a program that allow user to enter information for several clients. Each client has a name, phone number, and email address.Here is the workflow of the program:
            //•	User enters the number of clients
            //•	The program creates three arrays for storing the name, phone, and email information
            //•	User enters the information for all clients
            //•	After all client information has been entered, the program displays the information of all clients

            Console.WriteLine("=========================Activity 5===========================");
            int NumberPeople;
            while (true)
            {
                try
                {
                    Console.WriteLine(
                        "Enter the number of people that you need to enter information"
                    );
                    NumberPeople = Convert.ToInt32(Console.ReadLine());
                    break;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
            string[] NameArray = new string[NumberPeople];
            string[] PhoneArray = new string[NumberPeople];
            string[] EmailArray = new string[NumberPeople];

            static string InputInformation(string[] Information, int i)
            {
                Information[i] = Console.ReadLine();
                return Information[i];
            }

            for (int i = 0; i < NumberPeople; i++)
            {
                Console.WriteLine($" Enter name for {i}th people");
                NameArray[i] = InputInformation(NameArray, i);

                Console.WriteLine($" Enter phonenumber for {i}th people");
                PhoneArray[i] = InputInformation(PhoneArray, i);
                Console.WriteLine($" Enter email for {i}th people");
                EmailArray[i] = InputInformation(EmailArray, i);
            }
            Console.WriteLine(
                "=========================Information list:==========================="
            );
            for (int i = 0; i < NumberPeople; i++)
            {
                Console.WriteLine($"{i}th People ");
                Console.Write($" || Name: {NameArray[i]}");
                Console.Write($" || Phonenumber: {PhoneArray[i]}");
                Console.Write($" || Email: {EmailArray[i]}");
                Console.WriteLine();
            }
            */

            Console.WriteLine("=========================Activity 6==========================");
            Console.WriteLine("Now,We playing tic-tac-toe game");
            Console.WriteLine("You play with computer.");
            Console.WriteLine("This is position map:");
            string[,] TicTacToe = new string[3, 3];
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    Console.Write($" | {i}:{j} | ");
                }
                Console.WriteLine();
            }
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    TicTacToe[i, j] = "-";
                }
            }

            static void Show(string[,] Game)
            {
                Console.WriteLine("=============");
                for (int i = 0; i < 3; i++)
                {
                    for (int j = 0; j < 3; j++)
                    {
                        if (Game[i, j] != "-")
                            Console.Write($"|  {Game[i, j]}  |");
                        else
                            Console.Write($"| {i},{j} |");
                    }
                    Console.WriteLine();
                }
                Console.WriteLine("=============");
            }
            int round = 0;
            int ComputerScore = 0;
            int PlayerScore = 0;
            bool exit = false;
            while (exit == false)
            {
                // Enter position to play game
                while (true)
                {
                    Console.WriteLine("Enter positon if you want!");
                    Console.Write("x = ");
                    int x = Convert.ToInt32(Console.ReadLine());
                    Console.Write("y = ");
                    int y = Convert.ToInt32(Console.ReadLine());
                    if (round == 4)
                    {
                        exit = true;
                    }
                    else if (TicTacToe[x, y] == "-")
                    {
                        TicTacToe[x, y] = "X";
                        round++;
                        break;
                    }
                    else
                    {
                        Console.WriteLine("Your position is full");
                    }
                }
                // Random position for the computer play game
                int m,
                    n;
                while (true)
                {
                    Random rand = new Random();
                    m = rand.Next(0, 3);
                    n = rand.Next(0, 3);
                    if (round == 4)
                    {
                        exit = true;
                    }
                    else if (TicTacToe[m, n] == "-")
                    {
                        TicTacToe[m, n] = "O";
                        break;
                    }
                }
                //show result after each moved
                Show(TicTacToe);

                //Check result
                //Check by colum
                for (int i = 0; i < 3; i++)
                {
                    for (int j = 0; j < 3; j++)
                    {
                        if (TicTacToe[i, j] == "X")
                            PlayerScore++;
                        if (TicTacToe[i, j] == "O")
                            ComputerScore++;
                    }
                    if (PlayerScore == 3)
                    {
                        Console.WriteLine("You wins!");
                        exit = true;
                    }
                    else if (ComputerScore == 3)
                    {
                        Console.WriteLine("Computer wins!");
                        exit = true;
                    }
                    else
                    {
                        PlayerScore = 0;
                        ComputerScore = 0;
                    }
                }
                //Check by row

                for (int j = 0; j < 3; j++)
                {
                    for (int i = 0; i < 3; i++)
                    {
                        if (TicTacToe[i, j] == "X")
                            PlayerScore++;
                        if (TicTacToe[i, j] == "O")
                            ComputerScore++;
                    }
                    if (PlayerScore == 3)
                    {
                        Console.WriteLine("You wins!");
                        exit = true;
                    }
                    else if (ComputerScore == 3)
                    {
                        Console.WriteLine("Computer wins!");
                        exit = true;
                    }
                    else
                    {
                        PlayerScore = 0;
                        ComputerScore = 0;
                    }
                    // Check by diagonal
                    if (
                        (TicTacToe[0, 0] == "X")
                        && (TicTacToe[1, 1] == "X")
                        && (TicTacToe[2, 2] == "X")
                    )
                    {
                        {
                            Console.WriteLine("You wins!");
                            exit = true;
                        }
                    }
                    else if (
                        (TicTacToe[0, 2] == "X")
                        && (TicTacToe[1, 1] == "X")
                        && (TicTacToe[2, 0] == "X")
                    )
                    {
                        Console.WriteLine("You wins!");
                        exit = true;
                    }

                    if (
                        (TicTacToe[0, 0] == "O")
                        && (TicTacToe[1, 1] == "O")
                        && (TicTacToe[2, 2] == "O")
                    )
                    {
                        {
                            Console.WriteLine("Computer wins!");
                            exit = true;
                        }
                    }
                    else if (
                        (TicTacToe[0, 2] == "O")
                        && (TicTacToe[1, 1] == "O")
                        && (TicTacToe[2, 0] == "O")
                    )
                    {
                        Console.WriteLine("Computer wins!");
                        exit = true;
                    }
                }
            }

            if (round == 4)
            {
                Console.WriteLine("The game was a tie!");
            }
        }
    }
}
