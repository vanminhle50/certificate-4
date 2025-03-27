namespace Session_7
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //CircleCalculator cb = new CircleCalculator();
            //cb.Radius = 5;
            //Console.WriteLine(
            //    $"Circle has radius ={cb.Radius}; Circumference: {cb.Circumference(cb.Radius)}"
            //);
            //Console.WriteLine($"Circle has radius ={cb.Radius}; Area: {cb.Area(cb.Radius)}");
            //Student student = new Student();
            //student.Name = "John";
            //student.Address = "123 Main St";
            //student.Email = "john@gmail.com";
            //student.Phone = "1234567890";
            //student.Course = "C#";
            //Teacher teacher= new Teacher();
            //teacher.Name = "Jane";
            //teacher.Address = "456 Main ST";
            //teacher.

            Food milk = new Food();
            milk.Name = "Milk";
            milk.Price = 3;
            milk.Expiry = new DateTime(2025, 4, 20);
            milk.Print();
        }
    }
}
