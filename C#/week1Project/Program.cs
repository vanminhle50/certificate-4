using System;

namespace week1Project
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /* Console.WriteLine("Can you show me your number? ");
            int myNumber = Convert.ToInt16(Console.ReadLine());
            Console.WriteLine("___________________________________________________________");
            Console.WriteLine("                        Result                             ");
            if (myNumber >= 0)
                Console.WriteLine(myNumber + " greater than 0");
            else
                Console.WriteLine(myNumber + " less than 0");
            Console.WriteLine("___________________________________________________________");
        */
            Console.WriteLine("How many numbers do you want to sort?");
            int k = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Can you show me your list numbers?");
            int[] answer = new int[k];
            for (int i = 0; i < answer.Length; i++)
            {
                Console.Write("List" + "[" + i + "]=");
                answer[i] = Convert.ToInt32(Console.ReadLine());
            }

            for (int i = 0; i < answer.Length - 1; i++)
            {
                for (int t = 0; t < answer.Length - 1; t++)
                {
                    if (answer[t] > answer[t + 1])
                    {
                        int tempNumber = answer[t];
                        answer[t] = answer[t + 1];
                        answer[t + 1] = tempNumber;
                    }
                }
            }
            Console.WriteLine("Sorted numbers in ascending order:");
            foreach (int num in answer)
            {
                Console.Write(num + " ");
            }
        }
    }
}
