using System.Threading.Tasks;
using SQLitePCL;
// Create a new instance of the DBInterface class to interact with the database
var database = new DBInterface();
// Main program loop to do the following tasks: add, update, delete, and complete tasks
while (true)
{
    // Clear the console for a fresh display
    Console.Clear();
    // Read the tasks (To do list) from database and display it console
    Console.WriteLine("============ TO DO LIST ============");
    // Create the list of tasks in the database
    List<Task> tasks;
    // Catch any errors that occur when reading the tasks from the database
    // Read the tasks from the database and store them in the tasks list
    tasks = database.ReadTasks();
    // Display all tasks in the console
    DisplayAllTasks(tasks);
    Console.WriteLine("\n============    MENU    ============");
    Console.WriteLine("===========CONNECTED MODE===========");
    Console.WriteLine("1. Add Task");
    Console.WriteLine("2. Update Task");
    Console.WriteLine("3. Delete Task");
    Console.WriteLine("4. Mark Task as Completed");
    Console.WriteLine("==========DISCONNECTED MODE=========");
    Console.WriteLine("5. Delete Task");
    Console.WriteLine("====================================");
    Console.WriteLine("=========WORK WITH CSV FILE=========");
    Console.WriteLine("6. Import Tasks from CSV file.");
    Console.WriteLine("7. Export Tasks to CSV file.");
    Console.WriteLine("====================================");
    Console.WriteLine("8. Exits");
    Console.Write("\nSelect an option (1-8): ");
    var input = Console.ReadLine();
    // Check if the input is null or empty, if so, continue to the next iteration of the loop   
    try
    {
        // Execute the selected option to add, update, delete, or complete a task
        switch (input)
        {
            // Option 1: Add a new task to the database
            case "1":
                int addId;
                // Check if the task ID does not exist to the database
                while (true)
                {
                    // Read the task ID to update from the user through the ReadTaskId method
                    addId = ReadTaskId("add");
                    // Check if the task ID already exists in the database through the TaskExists method
                    if (database.TaskExists(addId))
                    {
                        Console.WriteLine($"Error: The Task with ID = {addId} already exist. Please try again!");
                    }
                    else break;
                }
                // Create a new task with the given ID and details through the EnterTaskDetails method
                var newTask = EnterTaskDetails(addId);
                // Add the new task to the database
                if (database.AddTask(newTask))
                {
                    Console.WriteLine($"Task with ID {addId} added successfully.");
                }
                else
                // If the task could not be added, display a message
                {
                    Console.WriteLine($"Failed to add task with ID {addId}.");
                    break;
                }
                break;
            // Option 2: Update an existing task in the database
            case "2":
                // Read the task ID to update from the user through the ReadTaskId method
                int updateId = ReadTaskId("update");
                // Check if the task ID exists in the database through the TaskExists method            
                if (!database.TaskExists(updateId))
                {
                    // If the task ID does not exist, display a message and break the update operation
                    Console.WriteLine($"Task with ID {updateId} does not exist.");
                    break;
                }
                // If the task ID exists, get the task details from the database from update Task ID
                Task updateTask = database.GetTask(updateId);
                // Display the current task details and prompt the user select a property for updates
                while (true)
                {
                    Console.WriteLine($"\nCurrent Task Details: \nTitle: {updateTask.Title}, Description: {updateTask.Description}, Due Date: {updateTask.DueDate}, Status: {updateTask.Status}");
                    Console.WriteLine($"\nWhat do you you want to update?\n 1: Title\n 2: Description\n 3: Due Date\n 4: Status\n 5: Finish Update\nPlease select an option (1-5):");
                    var select = Console.ReadLine();
                    // Update the Title for the task.
                    if (select == "1")
                    {
                        Console.WriteLine($"Current Title: {updateTask.Title}");
                        Console.Write("Enter new Title: ");
                        updateTask.Title = Console.ReadLine()!.Trim();
                    }
                    // Update the Description for the task.
                    else if (select == "2")
                    {
                        Console.WriteLine($"Current Description: {updateTask.Description}");
                        Console.Write("Enter new Description: ");
                        updateTask.Description = Console.ReadLine()!.Trim();
                    }
                    // Update the Due Date for the task.
                    else if (select == "3")
                    {
                        Console.WriteLine($"Current Due Date: {updateTask.DueDate}");
                        string dueDate;
                        do
                        {
                            Console.Write("Enter new Due Date (dd-MM-yyyy): ");
                            dueDate = Console.ReadLine()!.Trim();
                        } while (!IsValidDate(dueDate));
                        updateTask.DueDate = dueDate;
                    }
                    // Update the Status for the task.
                    else if (select == "4")
                    {
                        Console.WriteLine($"Current Status: {updateTask.Status}");
                        string status;
                        do
                        {
                            Console.Write("Enter new Status (Not Started, In Progress, Completed): ");
                            status = Console.ReadLine()!.Trim();
                        } while (!IsValidStatus(status));
                        updateTask.Status = status;
                    }
                    // Finish the update operation.
                    else if (select == "5")
                    {
                        Console.WriteLine("Finished update");
                        break;
                    }
                    // If the user selects an invalid option, display a message and continue the loop
                    else
                    {
                        Console.WriteLine("Invalid option. Please try again.");
                    }
                }
                // Update the task in the database with the new details
                if (database.UpdateTask(updateTask))
                {
                    // If the task was updated successfully, display a message
                    Console.WriteLine($"Task with ID {updateId} updated successfully.");
                }
                else
                {
                    // If the task could not be updated, display a message
                    Console.WriteLine($"Failed to update task with ID {updateId}.");
                    break;
                }
                break;
            // Option 3: Delete a task from the database
            case "3":
                // Read the task ID to delete from the user through the ReadTaskId method
                int deleteId = ReadTaskId("delete");

                // Check if the task ID exists in the database through the TaskExists method            
                if (!database.TaskExists(deleteId))
                {
                    // If the task ID does not exist, display a message and break the delete operation
                    Console.WriteLine($"Task with ID {deleteId} does not exist.");
                    break;
                }
                // If the task ID exists, delete the task from the database
                if (database.DeleteTask(deleteId))
                {
                    // If the task was deleted successfully, display a message
                    Console.WriteLine($"Task with ID {deleteId} deleted successfully.");
                }
                else
                {
                    // If the task could not be deleted, display a message
                    Console.WriteLine($"Failed to delete task with ID {deleteId}.");
                    break;
                }
                break;
            // Option 4: Mark a task as completed in the database
            case "4":
                // Read the task ID to complete from the user through the ReadTaskId method
                int completeId = ReadTaskId("complete");
                // Check if the task ID exists in the database through the TaskExists method            
                if (!database.TaskExists(completeId))
                {
                    // If the task ID does not exist, display a message and break mark a task as completed in the database operation
                    Console.WriteLine($"Task with ID {completeId} does not exist.");
                    break;
                }
                // If the task ID exists, mark the task as completed in the database
                if (database.CompleteTask(completeId))
                {
                    // If the task was marked as completed successfully, display a message                  
                    Console.WriteLine($"Task with ID {completeId} marked as completed.");
                }
                else
                {
                    // If the task could not be marked as completed, display a message
                    Console.WriteLine($"Failed to mark task with ID {completeId} as completed.");
                    break;
                }
                break;
            case "5":
                // Read the task ID to delete from the user through the ReadTaskId method
                int deleteId2 = ReadTaskId("delete");
                if (database.DeleteTaskDisconnected(deleteId2))
                {
                    // If the task was deleted successfully, display a message
                    Console.WriteLine($"Task with ID {deleteId2} deleted successfully (disconnected).");
                }
                else
                {
                    // If the task could not be deleted, display a message
                    Console.WriteLine($"Failed to delete task with ID {deleteId2}.");
                    break;
                }
                break;
            // Option 6: Import tasks from a CSV file
            case "6":
                Console.Write("Enter ONLY the file name CSV file to import tasks (Example: DataInput) : ");
                string CSVFileName = Console.ReadLine()!.Trim();

                // Import tasks from the specified CSV file
                if (database.ImportTasksFromCSV(CSVFileName))
                {
                    // If the tasks were imported successfully, display a message
                    Console.WriteLine("Tasks imported successfully.");
                }
                else
                {
                    // If the tasks could not be imported, display a message
                    Console.WriteLine("Failed to import tasks from CSV file.");
                }
                break;

            // Option 7: Export tasks to a CSV file
            case "7":
                Console.Write("Enter ONLY the file name CSV file to export tasks (Example: DataExport) : ");
                string exportCSVFileName = Console.ReadLine()!.Trim();
                // Export tasks to the specified CSV file
                if (database.ExportTasksToCSV(exportCSVFileName))
                {
                    // If the tasks were exported successfully, display a message
                    Console.WriteLine("Tasks exported successfully.");
                }
                else
                {
                    // If the tasks could not be exported, display a message
                    Console.WriteLine("Failed to export tasks to CSV file.");
                }
                break;

            // Option 8: Exit the program
            case "8":
                Console.WriteLine("Goodbye!");
                return;
            // If the user selects an invalid option, display a message and continue the loop
            default:
                Console.WriteLine("Invalid option. Please try again.");
                break;
        }
    }
    // Catch any errors that occur when executing the selected option
    catch (Exception ex)
    {
        Console.WriteLine($"Operation failed: {ex.Message}");
    }
    // Prompt the user to continue and refresh the TO DO LIST
    ContinuePrompt();
}
// Method to display all tasks in the console from the list of tasks
static void DisplayAllTasks(List<Task> tasks)
{
    if (!tasks.Any())
    {
        Console.WriteLine("No tasks available.");
        return;
    }

    Console.WriteLine("Current Tasks:");
    foreach (var task in tasks)
    {
        Console.WriteLine($"ID: {task.TaskId}, Title: {task.Title}, Description: {task.Description}, Due: {task.DueDate}, Status: {task.Status}");
    }
}
// Method to input task properties from the user
static Task EnterTaskDetails(int id)
{
    Console.Write("Enter Title: ");
    string title = Console.ReadLine()!.Trim();

    Console.Write("Enter Description: ");
    string description = Console.ReadLine()!.Trim();

    string dueDate;
    do
    {
        Console.Write("Enter Due Date (dd-MM-yyyy): ");
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
// Method to validate the date format to check if the date is in the correct format
static bool IsValidDate(string date)
{
    if (DateTime.TryParseExact(date, "dd-MM-yyyy", null, System.Globalization.DateTimeStyles.None, out _))
        return true;
    Console.WriteLine("Invalid date format. Use dd-MM-yyyy.");
    return false;
}
// Method to validate the status of the task to check if the status is one of the valid statuses
static bool IsValidStatus(string status)
{
    var validStatuses = new[] { "Not Started", "In Progress", "Completed" };
    if (validStatuses.Contains(status))
        return true;
    Console.WriteLine("Invalid status. Choose from: Not Started, In Progress, Completed.");
    return false;
}
// Method to read the task ID from the user to check if the task ID is a positive number
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
// Method to prompt the user to continue and refresh the TO DO LIST
static void ContinuePrompt()
{
    Console.WriteLine("Press Enter to back MENU and refresh TO DO LIST");
    Console.ReadLine();
}