using System.Text;

namespace Rock_Paper_Scissors_Game
{
    class Program
    {
        static int ReadInput()
        {
            while (true)
            {
                try
                {
                    int input = Convert.ToInt16(Console.ReadLine());
                    if (input >= 1 && input <= 3)
                    {
                        return input;
                    }
                    else
                        Console.Write(
                            "Your number is not in the range of 1 to 3. Enter a number again! "
                        );
                }
                catch
                {
                    Console.Write("Invalid format. Enter a number: ");
                }
            }
        }

        static int RPS(ref int a, ref int b)
        {
            Random computer = new Random();
            Console.WriteLine("Enter your choice: 1 (Rock), 2 (Paper), 3 (Scissors)");
            int playerA = ReadInput();
            int playerB = computer.Next(1, 4);
            Console.WriteLine("Player B (Computer): " + playerB);

            if (playerA == playerB)
            {
                Console.WriteLine("------------------------------------------");
                Console.WriteLine("Tie game");
                Console.WriteLine("------------------------------------------");
            }
            else if (
                (playerA == 1 && playerB == 3)
                || (playerA == 2 && playerB == 1)
                || (playerA == 3 && playerB == 2)
            )
            {
                Console.WriteLine("------------------------------------------");
                Console.WriteLine("A (You) wins");
                Console.WriteLine("------------------------------------------");
                a++;
            }
            else
            {
                Console.WriteLine("------------------------------------------");
                Console.WriteLine("B (Computer) wins");
                Console.WriteLine("------------------------------------------");
                b++;
            }

            return 0;
        }

        static void Main()
        {
            int playerScore = 0,
                computerScore = 0;
            int round = 0;
            while (true)
            {
                RPS(ref playerScore, ref computerScore);
                round++;
                if (round == 5)
                {
                    Console.WriteLine($"Score - You: {playerScore}, Computer: {computerScore}");
                    break;
                }
            }
        }
    }
}
