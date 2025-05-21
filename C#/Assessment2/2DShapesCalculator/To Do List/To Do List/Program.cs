var database = new DBInterface();

while (true)
{
    // Clear the console for a fresh display
    Console.Clear();
    // Read the tasks (To do list) from database and display it console
    Console.WriteLine("============ TO DO LIST ============");
    // Create the list of tasks in the database
    List<Task> tasks;
    // Catch any errors that occur when reading the tasks from the database
    try
    {
        // Read the tasks from the database and store them in the tasks list
        tasks = database.ReadTasks();
        // Display all tasks in the console
        DisplayAllTasks(tasks);
    }
    catch (Exception ex)
    {
        // If an error occurs, display the error message and continue to the next iteration
        Console.WriteLine($"Error loading tasks: {ex.Message}");
        ContinuePrompt();
        continue;
    }

    Console.WriteLine("====================================");
    Console.WriteLine("1. Add Task");
    Console.WriteLine("2. Update Task");
    Console.WriteLine("3. Delete Task");
    Console.WriteLine("4. Mark Task as Completed");
    Console.WriteLine("5. Exit");
    Console.Write("Select an option (1-5): ");
    var input = Console.ReadLine();

    try
    {
        switch (input)
        {
            case "1":
                var newTask = EnterTaskDetails();
                database.AddTask(newTask);
                Console.WriteLine("Task added successfully.");
                break;

            case "2":
                int updateId = ReadTaskId("update");
                var existing = tasks.FirstOrDefault(t => t.TaskId == updateId);
                if (existing == null)
                {
                    Console.WriteLine("Task ID not found.");
                    break;
                }
                var updatedTask = EnterTaskDetails(existing.TaskId);
                database.UpdateTask(updatedTask);
                Console.WriteLine("Task updated successfully.");
                break;

            case "3":
                int deleteId = ReadTaskId("delete");
                if (!tasks.Any(t => t.TaskId == deleteId))
                {
                    Console.WriteLine("Task ID not found.");
                    break;
                }
                database.DeleteTask(deleteId);
                Console.WriteLine("Task deleted successfully.");
                break;

            case "4":
                int completeId = ReadTaskId("complete");
                if (!tasks.Any(t => t.TaskId == completeId))
                {
                    Console.WriteLine("Task ID not found.");
                    break;
                }
                database.CompleteTask(completeId);
                Console.WriteLine("Task marked as completed.");
                break;

            case "5":
                Console.WriteLine("Goodbye!");
                return;

            default:
                Console.WriteLine("Invalid option. Please try again.");
                break;
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Operation failed: {ex.Message}");
    }

    ContinuePrompt();
}

static void DisplayAllTasks(List<Task> tasks)
{
    if (!tasks.Any())
    {
        Console.WriteLine("\nNo tasks available.");
        return;
    }

    Console.WriteLine("\nCurrent Tasks:");
    foreach (var task in tasks)
    {
        Console.WriteLine($"ID: {task.TaskId}, Title: {task.Title}, Description: {task.Description}, Due: {task.DueDate}, Status: {task.Status}");
    }
}

static Task EnterTaskDetails(int? existingId = null)
{
    int id = existingId ?? 0; // Not used for new tasks as ID is auto-generated

    Console.Write("Enter Title: ");
    string title = Console.ReadLine()!.Trim();

    Console.Write("Enter Description: ");
    string description = Console.ReadLine()!.Trim();

    string dueDate;
    do
    {
        Console.Write("Enter Due Date (dd/MM/yyyy): ");
        dueDate = Console.ReadLine()!.Trim();
    } while (!IsValidDate(dueDate));

    string status;
    do
    {
        Console.Write("Enter Status (Not Started, In Progress, Completed): ");
        status = Console.ReadLine()!.Trim();
    } while (!IsValidStatus(status));

    return new Task(id, title, description, dueDate, status);
}

static bool IsValidDate(string date)
{
    if (DateTime.TryParseExact(date, "dd/MM/yyyy", null, System.Globalization.DateTimeStyles.None, out _))
        return true;
    Console.WriteLine("Invalid date format. Use dd/MM/yyyy.");
    return false;
}

static bool IsValidStatus(string status)
{
    var validStatuses = new[] { "Not Started", "In Progress", "Completed" };
    if (validStatuses.Contains(status))
        return true;
    Console.WriteLine("Invalid status. Choose from: Not Started, In Progress, Completed.");
    return false;
}

static int ReadTaskId(string action)
{
    int id;
    while (true)
    {
        Console.Write($"Enter Task ID to {action}: ");
        if (int.TryParse(Console.ReadLine(), out id) && id > 0)
            return id;
        Console.WriteLine("Invalid input. Please enter a positive number.");
    }
}

static void ContinuePrompt()
{
    Console.WriteLine("Press Enter to continue...");
    Console.ReadLine();
}