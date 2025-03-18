namespace Random_Password_Program
{
    internal class Program
    {
        static void Main(string[] args)
        { /*
            string fullAlphabet = "abcdefghiklmnopqrstuvwxyz";
            Random random = new Random();
            Console.WriteLine("Enter the length of the password");
            int length = Convert.ToInt32(Console.ReadLine());
            string password = "";
            int index = -1;
            char letter = ' ';
            int i = 0;
            while (i < length)
            {
                index = random.Next(0, fullAlphabet.Length);
                letter = fullAlphabet[index];
                password = password + letter;
                i++;
            }
            int indexUper = random.Next(0, password.Length);
            char[] passwordArray = password.ToCharArray();
            passwordArray[indexUper] = Char.ToUpper(passwordArray[indexUper]);
            password = new string(passwordArray);
            Console.WriteLine("Random password is: " + password); */
            // Các bộ ký tự cho mật khẩu
            string lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
            string upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            string specialCharacters = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";
            string digits = "0123456789";

            Random random = new Random();
            int length;
            do
            {
                Console.WriteLine("Enter the length of the password (minimum 8 characters):");
                length = Convert.ToInt32(Console.ReadLine());
            } while (length < 8);

            string password = "";
            password += upperCaseLetters[random.Next(0, upperCaseLetters.Length)];
            password += specialCharacters[random.Next(0, specialCharacters.Length)];
            password += digits[random.Next(0, digits.Length)];

            string allCharacters = lowerCaseLetters + upperCaseLetters + specialCharacters + digits;
            for (int i = password.Length; i < length; i++)
            {
                password += allCharacters[random.Next(0, allCharacters.Length)];
            }

            password = new string(password.ToCharArray().OrderBy(c => random.Next()).ToArray());

            Console.WriteLine("Random password is: " + password);
        }
    }
}
