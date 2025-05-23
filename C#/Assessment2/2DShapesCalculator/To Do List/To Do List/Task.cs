using System.Threading.Tasks;
// Define a class to represent a task in the to-do list
class Task
{
    // Properties of the task
    public int TaskId;
    public string Title;
    public string Description;
    public string DueDate;
    public string Status;
    // Constructor to initialize a task object  
    public Task(int taskid, string title, string description, string duedate, string status)
    {
        TaskId = taskid;
        Title = title;
        Description = description;
        DueDate = duedate;
        Status = status;
    }
}