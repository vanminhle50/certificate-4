using Microsoft.Data.Sqlite;
class DBInterface
{
    // Read all tasks from the database
    public List<Task> ReadAll()
    {
        // Create a list to hold the tasks
        List<Task> tasks = new List<Task>();
        // Define the connection string to the database
        // The database file is located in the same directory as the executable
        string dbPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "AT2_Part3_DB.db");
        // Define the connection string to the database from the path
        string connectionString = $"Data Source={dbPath}";
        // Create a connection to the database
        var connection = new SqliteConnection(connectionString);
        // Open the connection to the database
        connection.Open();
        // Create a command to execute SQL queries to retrieve all data from the database
        var command = connection.CreateCommand();
        // Define SQL query to retrieve all data from the the database
        command.CommandText = "SELECT * FROM Tasks";
        // Execute the command and reading the data from the database
        var reader = command.ExecuteReader();
        // Loop through the data reader to read each row of data
        while (reader.Read())
        {
            // Create a new task object for each row of data
            var taskid = reader.GetInt32(0);
            var title = reader.GetString(1);
            var description = reader.GetString(2);
            var dueday = reader.GetString(3);
            var status = reader.GetString(4);
            // Push the task object to the list of tasks
            tasks.Add(new Task(taskid, title, description, dueday, status));    
        }

        // Close the data reader and the connection to the database
        reader.Close();
        connection.Close();
        // Return a list of tasks from the database
        return tasks;

    }
}