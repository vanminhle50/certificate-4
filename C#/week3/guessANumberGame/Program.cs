using System.Security.Cryptography;

namespace guessANumberGame
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(
                "Guess a number Game. You have 5 chances to guess what the number is"
            );
            Random random = new Random();
            int target = random.Next(1, 10);
            int result = 0;
            int round = 0;
            int guess;
            do
            {
                Console.WriteLine("Guess and enter a number 1~10");
                guess = Convert.ToInt32(Console.ReadLine());
                if (guess < target)
                {
                    Console.WriteLine("Your number less than target number");
                }
                else if (guess > target)
                {
                    Console.WriteLine("Your number greater than target number");
                }
                else
                {
                    Console.WriteLine("Congratulations! This number is " + target);
                    result = 1;
                }
                round++;
                if (round == 5)
                {
                    Console.WriteLine("You lose!");
                }
            } while (result == 0 || round == 5);
        }
    }
}
