namespace week3ClassActivity
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int i = 0;
            Console.WriteLine(
                "------------------------------20 random number------------------------------"
            );
            while (i < 20)
            {
                Random random = new Random();
                int x = random.Next(1, 10);
                Console.WriteLine("Random Number " + (i + 1) + ": " + x);
                i++;
            }

            Console.WriteLine(
                "------------------------------Print a quare of 5x5------------------------------"
            );
            int j = 0;
            int k = 0;
            while (j < 5)
            {
                while (k < 5)
                {
                    Console.Write("*");
                    k++;
                }
                k = 0;
                Console.WriteLine();
                j++;
            }
            Console.WriteLine(
                "------------------------------Print a quare of mxn------------------------------"
            );
            int m,
                n;
            j = 0;
            k = 0;
            Console.WriteLine("Enter value of lenght of square");
            m = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter value of width of square");
            n = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Result");
            while (j < n)
            {
                while (k < m)
                {
                    Console.Write("*");
                    k++;
                }
                k = 0;
                Console.WriteLine();
                j++;
            }
            Console.WriteLine(
                "------------------------------Print seat labels------------------------------"
            );
            j = 0;
            k = 0;
            Console.WriteLine("Enter the number of columns of desks in the class");
            m = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter the number of rows of desks in the class");
            n = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Result");
            while (j < n)
            {
                while (k < m)
                {
                    Console.Write("| " + (j + 1) + "." + (k + 1) + " |");
                    k++;
                }
                k = 0;
                Console.WriteLine();
                j++;
            }

            Console.WriteLine(
                "------------------------------Print another shapes------------------------------"
            );
            int _col = 10;
            int _row = 0;
            while (_col >= 0)
            {
                if (_row <= _col)
                {
                    while (_row <= _col)
                    {
                        Console.Write("*");
                        _row++;
                    }
                    Console.WriteLine();
                    _row = 0;
                }
                _col--;
            }

            Console.WriteLine(
                "------------------------------Print another shapes------------------------------"
            );

            _col = 0;
            _row = 0;
            while (_col < 10)
            {
                if (_row <= _col)
                {
                    while (_row <= _col)
                    {
                        Console.Write("*");
                        _row++;
                    }
                    Console.WriteLine();
                    _row = 0;
                }
                _col++;
            }
            _col = 10;
            _row = 0;
            while (_col >= 0)
            {
                if (_row <= _col)
                {
                    while (_row <= _col)
                    {
                        Console.Write("*");
                        _row++;
                    }
                    Console.WriteLine();
                    _row = 0;
                }
                _col--;
            }

            Console.WriteLine(
                "------------------------------Print another shapes------------------------------"
            );
            _col = 1;
            _row = 1;
            while (_col <= 10)
            {
                while (_row <= 10)
                {
                    if ((_row == 1) || (_row == 10) || (_col == 1) || (_col == 10))
                    {
                        Console.Write("*");
                    }
                    else
                    {
                        Console.Write(" ");
                    }
                    _row++;
                }
                _row = 1;
                Console.WriteLine();
                _col++;
            }
        }
    }
}
