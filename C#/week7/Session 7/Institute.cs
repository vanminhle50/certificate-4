class Person // base class
{
    public string Name;
    public string Address;
    public string Email;
    public string Phone;

    public void Print()
    {
        Console.WriteLine("Name: " + Name);
        Console.WriteLine("Address: " + Address);
        Console.WriteLine("Email: " + Email);
        Console.WriteLine("Phone: " + Phone);
    }
}

class Student : Person // inherit from base class
{
    public int Id;
    public string Course;

    public void Print()
    {
        Console.WriteLine("Student Information");
        base.Print();
        Console.WriteLine("Course: " + Course);
    }
}

class Teacher : Person
{
    public int Salary;

    public void Print()
    {
        Console.WriteLine("Teacher Information");
        base.Print();
        Console.WriteLine("Salary: " + Salary);
    }
}
