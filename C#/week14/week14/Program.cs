var dataBase = new DBInterface();

while (true)
{
    Console.WriteLine("TUTORIAL WORK DATA WITH DISCONNECTED MODE");
    Console.WriteLine("Student Table");
    List<Student> students = dataBase.readAll();
    foreach (Student student in students)
    {
        Console.WriteLine($"ID: {student.StudentID}, Name: {student.Name}");
    }

    Console.WriteLine("\nWelcome to Institute!");
    Console.WriteLine("1. All Students");
    Console.WriteLine("2. One Student by ID");
    Console.WriteLine("3. Add Student");
    Console.WriteLine("4. Update Student");
    Console.WriteLine("5. Delete Student");

    Console.WriteLine("exit");
    Console.Write("Please select an option: ");
    var input = Console.ReadLine();

    if (input == "1") { }
    else if (input == "2")
    {
        Console.WriteLine("Add a Student to DataBase");
        Console.WriteLine("Enter Student ID: ");
        var studentId = Console.ReadLine();
        Console.WriteLine("Enter Student Name: ");
        var studentName = Console.ReadLine();
        Student student = new Student(studentId, studentName);
        dataBase.AddStudent(student);
    }
    else if (input == "3") { }
    else if (input == "4") { }
    else if (input == "5") { }
    else if (input == "exit")
    {
        break;
    }
}
Console.WriteLine("Goodbye!");
