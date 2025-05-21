using System.Threading.Tasks;

class Task
{
    public int TaskId;
    public string Title;
    public string Description;
    public string DueDate;
    public string Status;
    public Task(int taskid, string title, string description, string duedate, string status)
    {
        TaskId = taskid;
        Title = title;
        Description = description;
        DueDate = duedate;
        Status = status;
    }

}