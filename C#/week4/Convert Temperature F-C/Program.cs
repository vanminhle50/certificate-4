namespace Convert_Temperature_F_C
{
    internal class Program
    {
        // the method of generating a message
        static double FtoC(double FValue)
        {
            return Math.Round(Convert.ToDouble((FValue - 32) * (5.0 / 9.0)), 2);
        }

        static double CtoF(double Cvalue)
        {
            return Math.Round(Convert.ToDouble((Cvalue * 9.0 / 5.0) + 32), 2);
        }

        /*----------------------------------------------------------------------------------------
        static void Main(string[] args)
        {
            bool exit = false;
            while (!exit)
            {
                Console.WriteLine("Enter your choice");
                Console.WriteLine("F: Convert F to C");
                Console.WriteLine("C: Convert C to F");
                Console.WriteLine("E: Exit the program");
                string command = Console.ReadLine();
                switch (command)
                {
                    default:
                        Console.WriteLine("Invalid command, Please enter F,C,E!");
                        break;
                    case "E"
                    or "e":
                        Console.WriteLine(" Exiting the program....");
                        exit = true;
                        break;
                    case "F"
                    or "f":

                        {
                            Console.WriteLine("Enter temperature to convert");
                            double temperature = double.Parse(Console.ReadLine());
                            Console.WriteLine(
                                temperature + " F " + " = " + FtoC(temperature) + " C "
                            );
                        }
                        break;
                    case "C"
                    or "c":

                        {
                            Console.WriteLine("Enter temperature to convert");
                            double temperature = double.Parse(Console.ReadLine());
                            Console.WriteLine(
                                temperature + " C " + " = " + CtoF(temperature) + " F "
                            );
                        }
                        break;
                }
            }
        }
        ------------------------------------------------------------------------------------------*/
        static void convertTemp(string option)
        {
            if (option.ToUpper() == "F")
            {
                Console.WriteLine("Enter temperature to convert");
                double temperature = double.Parse(Console.ReadLine());
                Console.WriteLine(temperature + " F " + " = " + FtoC(temperature) + " C ");
            }
            else if (option.ToUpper() == "C")
            {
                Console.WriteLine("Enter temperature to convert");
                double temperature = double.Parse(Console.ReadLine());
                Console.WriteLine(temperature + " C " + " = " + CtoF(temperature) + " F ");
            }
            else
                Console.WriteLine("Invalid command!");
        }

        static void Main(string[] args)
        {
            bool exit = false;
            while (!exit)
            {
                Console.WriteLine("Enter your choice");
                Console.WriteLine("F: Convert F to C");
                Console.WriteLine("C: Convert C to F");
                Console.WriteLine("E: Exit the program");
                string opption = Console.ReadLine();
                if (opption.ToUpper() == "E")
                {
                    exit = true;
                }
                else
                {
                    convertTemp(opption);
                }
            }
        }
    }
}
