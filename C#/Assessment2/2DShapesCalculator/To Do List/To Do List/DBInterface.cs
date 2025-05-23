using Microsoft.Data.Sqlite;
using System.Data;
using System.Data.SQLite;
using SQLitePCL;
class DBInterface
    {
        // Define the database connection string
        private string GetConnectionString()
        {
            // Use the current directory to locate the database file
            string dbPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "AT2_Part3_DB.db");
            // Get the connection string from the database file path
            return $"Data Source={dbPath}";
        }
        // Create a list of tasks in the database
        public List<Task> ReadTasks()
        {
            // Initialize an empty list of tasks
            List<Task> tasks = new List<Task>();
            // Get the connection string to the database
            string connectionString = GetConnectionString();
            // Catch any errors that occur when reading the tasks from the database
            try
            {
                // Using statement to ensure the connection is disposed of properly when done or in case of an error
                using (var connection = new SqliteConnection(connectionString))
                {
                    // Open the connection to the database
                    connection.Open();
                    // Create a command to execute SQL queries
                    var command = connection.CreateCommand();
                    // SQL command to select all tasks from the Tasks table
                    command.CommandText = "SELECT * FROM Tasks";
                    // Execute the command and read the results
                    using (var reader = command.ExecuteReader())
                    {
                        // Read each row from the database and push it into the tasks list
                        while (reader.Read())
                        {
                            // Read the values from the current row
                            int taskId = reader.GetInt32(0);
                            string title = reader.GetString(1);
                            string description = reader.GetString(2);
                            string dueDate = reader.GetString(3);
                            string status = reader.GetString(4);
                            // Create a new Task object and add it to the list
                            tasks.Add(new Task(taskId, title, description, dueDate, status));
                        }
                        return tasks;
                    }

                }
            }
            catch (Exception ex)
            {
                // If an error occurs, display the error message and continue to the next iteration
                Console.WriteLine($"Error loading tasks: {ex.Message}");
                return tasks;
            }
        }

        // Create a new task and push it into the database (To do list)
        public bool AddTask(Task task)
        {
            // Check if the task has errors and handle errors if it is
            if (task == null)
            {
                Console.WriteLine("Task is null");
                return false;
            }
            if (task.TaskId <= 0)
            {
                Console.WriteLine("Invalid Task ID.");
                return false;
            }
            if (string.IsNullOrEmpty(task.Title) || string.IsNullOrEmpty(task.Description)
                || string.IsNullOrEmpty(task.DueDate) || string.IsNullOrEmpty(task.Status))
            {
                Console.WriteLine("Task properties cannot be null or empty.");
                return false;
            }
            // If the task does not exist, handle errors if it is
            if (TaskExists(task.TaskId))
            {
                Console.WriteLine($"Task with ID {task.TaskId} already exist.");
                return false;
            }

            // Get the connection string to the database
            string connectionString = GetConnectionString();
            // Using statement to ensure the connection is disposed of properly when done or in case of an error
            try
            {
                using (var connection = new SqliteConnection(connectionString))
                {
                    // Open the connection to the database
                    connection.Open();
                    // Create a command to execute SQL queries
                    var command = connection.CreateCommand();
                    // SQL command to insert a new task into the Tasks table
                    command.CommandText = @"
                INSERT INTO Tasks (TaskId, Title, Description, DueDate, Status)
                VALUES (@taskId, @title, @description, @dueDate, @status)";
                    // Add parameters to the command to prevent SQL injection attacks
                    command.Parameters.AddWithValue("@taskId", task.TaskId);
                    command.Parameters.AddWithValue("@title", task.Title);
                    command.Parameters.AddWithValue("@description", task.Description);
                    command.Parameters.AddWithValue("@dueDate", task.DueDate);
                    command.Parameters.AddWithValue("@status", task.Status);
                    // Execute the command to insert the new task into the database
                    command.ExecuteNonQuery();
                    return true;
                }
            }
            catch (Exception ex)
            {
                // If an error occurs, display the error message and continue to the next iteration
                Console.WriteLine($"Error adding task: {ex.Message}");
                return false;
            }
        }
        // Update an existing task in the database
        public bool UpdateTask(Task task)
        {
            // Check if the task has errors and handle errors if it is
            if (task == null)
            {
                Console.WriteLine("Task is null");
                return false;
            }

            if (task.TaskId <= 0)
            {
                Console.WriteLine("Invalid Task ID.");
                return false;
            }

            if (string.IsNullOrEmpty(task.Title) || string.IsNullOrEmpty(task.Description) || string.IsNullOrEmpty(task.DueDate) || string.IsNullOrEmpty(task.Status))
            {
                Console.WriteLine("Task properties cannot be null or empty.");
                return false;
            }

            // If the task does not exist, handle errors if it is
            if (!TaskExists(task.TaskId))
            {
                Console.WriteLine($"Task with ID {task.TaskId} does not exist.");
                return false;
            }
            // Get the connection string to the database
            string connectionString = GetConnectionString();
            // Using statement to ensure the connection is disposed of properly when done or in case of an error
            try
            {
                using (var connection = new SqliteConnection(connectionString))
                {
                    // Open the connection to the database
                    connection.Open();
                    // Create a command to execute SQL queries
                    var updateCommand = connection.CreateCommand();
                    // SQL command to update an existing task in the Tasks table
                    updateCommand.CommandText = @"
                UPDATE Tasks 
                SET Title = @title, 
                    Description = @description, 
                    DueDate = @dueDate, 
                    Status = @status 
                WHERE TaskId = @taskId";
                    // Add parameters to the command to prevent SQL injection attacks
                    updateCommand.Parameters.AddWithValue("@taskId", task.TaskId);
                    updateCommand.Parameters.AddWithValue("@title", task.Title);
                    updateCommand.Parameters.AddWithValue("@description", task.Description);
                    updateCommand.Parameters.AddWithValue("@dueDate", task.DueDate);
                    updateCommand.Parameters.AddWithValue("@status", task.Status);
                    // Execute the command to update the task in the database
                    updateCommand.ExecuteNonQuery();
                    return true;
                }

            }
            catch (Exception ex)
            {
                // If an error occurs, display the error message and continue to the next iteration
                Console.WriteLine($"Error updating task: {ex.Message}");
                return false;
            }
        }

        // Delete a task from the database
        public bool DeleteTask(int taskId)
        {
            // Get the connection string to the database
            string connectionString = GetConnectionString();
            // Check if the task exists before attempting to delete it
            if (!TaskExists(taskId))
            {
                Console.WriteLine($"Task with ID {taskId} does not exist.");
                return false;
            }
            // Using statement to ensure the connection is disposed of properly when done or in case of an error
            try
            {
                using (var connection = new SqliteConnection(connectionString))
                {
                    // Open the connection to the database
                    connection.Open();
                    // Create a command to execute SQL queries
                    var command = connection.CreateCommand();
                    // SQL command to delete a task from the Tasks table
                    command.CommandText = "DELETE FROM Tasks WHERE TaskId = @taskId";
                    command.Parameters.AddWithValue("@taskId", taskId);
                    // Execute the command to delete the task from the database
                    command.ExecuteNonQuery();
                    return true;
                }
            }
            catch (Exception ex)
            {
                // If an error occurs, display the error message and continue to the next iteration
                Console.WriteLine($"Error deleting task: {ex.Message}");
                return false;
            }
        }

        // Mark a task as completed in the database
        public bool CompleteTask(int taskId)
        {
            // Get the connection string to the database
            string connectionString = GetConnectionString();
            // Check if the task exists before attempting to mark it as completed
            if (!TaskExists(taskId))
            {
                Console.WriteLine($"Task with ID {taskId} does not exist.");
                return false;
            }
            // Using statement to ensure the connection is disposed of properly when done or in case of an error
            try
            {
                using (var connection = new SqliteConnection(connectionString))
                {
                    // Open the connection to the database
                    connection.Open();
                    // Create a command to execute SQL queries
                    var command = connection.CreateCommand();
                    // SQL command to update the status of a task in the Tasks table
                    command.CommandText = "UPDATE Tasks SET Status = 'Completed' WHERE TaskId = @taskId";
                    command.Parameters.AddWithValue("@taskId", taskId);
                    // Execute the command to make a task as completed in the database
                    command.ExecuteNonQuery();
                    return true;
                }
            }
            catch (Exception ex)
            {
                // If an error occurs, display the error message and continue to the next iteration
                Console.WriteLine($"Error completing task: {ex.Message}");
                return false;
            }
        }
        // Check if id exists in the database
        public bool TaskExists(int taskId)
        {
            // Get the connection string to the database
            string connectionString = GetConnectionString();
            // Using statement to ensure the connection is disposed of properly when done or in case of an error
            try
            {
                using (var connection = new SqliteConnection(connectionString))
                {
                    // Open the connection to the database
                    connection.Open();
                    // Create a command to execute SQL queries
                    var command = connection.CreateCommand();
                    // SQL command to check if a task exists in the Tasks table
                    command.CommandText = "SELECT COUNT(1) FROM Tasks WHERE TaskId = @taskId";
                    command.Parameters.AddWithValue("@taskId", taskId);
                    // Execute the command and return true if the task exists, false otherwise
                    return (long)command.ExecuteScalar() > 0;
                }
            }
            catch (Exception ex)
            {
                // If an error occurs, display the error message and return false
                Console.WriteLine($"Error checking task existence: {ex.Message}");
                return false;
            }
        }
        // Get a Task from the database by its ID
        public Task GetTask(int taskId)
        {
            // Get the connection string to the database
            string connectionString = GetConnectionString();
            // Using statement to ensure the connection is disposed of properly when done or in case of an error
            try
            {
                using (var connection = new SqliteConnection(connectionString))
                {
                    // Open the connection to the database
                    connection.Open();
                    // Create a command to execute SQL queries
                    var command = connection.CreateCommand();
                    // SQL command to select a task from the Tasks table by its ID
                    command.CommandText = "SELECT * FROM Tasks WHERE TaskId = @taskId";
                    command.Parameters.AddWithValue("@taskId", taskId);
                    // Execute the command and read the results
                    using (var reader = command.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            // Read the values from the current row and return a new Task object
                            return new Task(reader.GetInt32(0), reader.GetString(1),
                                reader.GetString(2), reader.GetString(3), reader.GetString(4));
                        }
                        else
                        {
                            Console.WriteLine($"Task with ID {taskId} does not exist.");
                            return null;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                // If an error occurs, display the error message and return null
                Console.WriteLine($"Error getting task: {ex.Message}");
                return null;
            }
        }
    // Delete a task from the database in disconnected mode (A CRUDE operation)
    public bool DeleteTaskDisconnected(int taskId)
    {
        // Get a connection string to the database
        var connectionString = GetConnectionString();
        try
        {
            // Using statement to ensure the connection is disposed of properly when done or in case of an error
            // Method SQLiteConnection in the System.Data.SQLite namespace is used to create a connection to the database
            using (var connection = new SQLiteConnection(connectionString))
            {
                // Open the connection to the database
                connection.Open();
                // Create a adapter through execute SQL queries data from the Tasks table (Database)
                var adapter = new SQLiteDataAdapter("SELECT * FROM Tasks", connection);
                // Create a command builder to generate SQL commands for the adapter
                var builder = new SQLiteCommandBuilder(adapter);
                // Create dataset to hold the datatables from the database
                var dataset = new DataSet();
                // Fill the dataset with data from the Tasks table (Database)
                adapter.Fill(dataset, "Tasks");
                // Get the DataTable from the dataset   
                DataTable taskTable = dataset.Tables["Tasks"];
                // Check if the task exists in the DataTable
                DataRow[] rows = taskTable.Select($"TaskId = {taskId}");
                if (rows.Length == 0)
                {
                    // If the task does not exist, display a message and return false
                    Console.WriteLine($"Task with ID {taskId} not found.");
                    return false;
                }
                // Delete the task from the DataTable
                rows[0].Delete();
                // Update the database with the changes made to the DataTable
                adapter.Update(dataset, "Tasks");
                return true;
            }
        }
        catch (Exception ex)
        {
            // If an error occurs, display the error message and return false       
            Console.WriteLine($"Error deleting task in disconnected mode: {ex.Message}");
            return false;
        }
    }
}
