var database = new DBInterface();
while (true)
{
    Console.WriteLine("TO DO LIST APPLICATION");
    Console.WriteLine("1. All Task");
    Console.WriteLine("2. One Task");
    Console.WriteLine("3. Exit");
    Console.Write("Please select an option: ");
    var input = Console.ReadLine();
    if (input == "1")
    {
        var tasks = database.ReadAll();
        foreach (var task in tasks)
        {
            Console.WriteLine(
                "Task ID: "
                    + task.TaskId
                    + " Title: "
                    + task.Title
                    + " Description: "
                    + task.Description
                    + " Due day: "
                    + task.DueDate 
                    + " Status: " 
                    + task.Status
            );
        }
    }
    else if (input == "2")
    {

    }
    else if (input == "3")
    {
        break;
    }
}
Console.WriteLine("Goodbye!");
