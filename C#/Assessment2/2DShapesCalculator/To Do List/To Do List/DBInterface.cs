using Microsoft.Data.Sqlite;
using System;
using System.Collections.Generic;

class DBInterface
{
    // Define the database connection string
    private string GetConnectionString()
    {
        // Use the current directory to locate the database file
        string dbPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "AT2_Part3_DB.db");
        return $"Data Source={dbPath}";
    }
    // Create a list of tasks in the database
    public List<Task> ReadTasks()
    {
        // Initialize an empty list of tasks
        List<Task> tasks = new List<Task>();
        // Get the connection string to the database
        string connectionString = GetConnectionString();
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
            }
        }
        return tasks;
    }

    // Create a new task and push it into the database (To do list)
    public void AddTask(Task task)
    {
        // Check if the task is null and throw an exception if it is
        if (task == null)
            throw new ArgumentNullException(nameof(task));
        // Check if the task ID is less than or equal to zero and throw an exception if it is.
        if (string.IsNullOrEmpty(task.Title) || string.IsNullOrEmpty(task.Description) || string.IsNullOrEmpty(task.DueDate) || string.IsNullOrEmpty(task.Status))
            throw new ArgumentException("Task properties cannot be null or empty.");
        // Get the connection string to the database
        string connectionString = GetConnectionString();
        // Using statement to ensure the connection is disposed of properly when done or in case of an error
        using (var connection = new SqliteConnection(connectionString))
        {
            // Open the connection to the database
            connection.Open();
            // Create a command to execute SQL queries
            var command = connection.CreateCommand();
            // SQL command to insert a new task into the Tasks table
            command.CommandText = @"
                INSERT INTO Tasks (Title, Description, DueDate, Status)
                VALUES (@title, @description, @dueDate, @status)";
            command.Parameters.AddWithValue("@title", task.Title);
            command.Parameters.AddWithValue("@description", task.Description);
            command.Parameters.AddWithValue("@dueDate", task.DueDate);
            command.Parameters.AddWithValue("@status", task.Status);
            // Execute the command to insert the new task into the database
            command.ExecuteNonQuery();
        }
    }
    // Update an existing task in the database
    public void UpdateTask(Task task)
    {
        // Check if the task is null and throw an exception if it is
        if (task == null)
            throw new ArgumentNullException(nameof(task));
        // Check if the task ID is less than or equal to zero and throw an exception if it is.
        if (task.TaskId <= 0)
            throw new ArgumentException("Invalid Task ID.");
        // Check if any of the task properties are null or empty and throw an exception if they are.
        if (string.IsNullOrEmpty(task.Title) || string.IsNullOrEmpty(task.Description) || string.IsNullOrEmpty(task.DueDate) || string.IsNullOrEmpty(task.Status))
            throw new ArgumentException("Task properties cannot be null or empty.");
        // Get the connection string to the database
        string connectionString = GetConnectionString();
        // Using statement to ensure the connection is disposed of properly when done or in case of an error
        using (var connection = new SqliteConnection(connectionString))
        {
            // Open the connection to the database
            connection.Open();
            // Check if task Id existence in the database or not
            var checkCommand = connection.CreateCommand();
            // SQL command to check if a task exists in the Tasks table
            checkCommand.CommandText = "SELECT COUNT(1) FROM Tasks WHERE TaskId = @taskId";
            // Add parameter to the command to prevent SQL injection attacks
            checkCommand.Parameters.AddWithValue("@taskId", task.TaskId);
            // Check if the task exists 
            var exists = (long)checkCommand.ExecuteScalar() > 0;
            // If the task does not exist, throw an exception
            if (!exists)
            {
                throw new ArgumentException($"Task with ID {task.TaskId} does not exist.");
            }
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
        }
    }
    // Delete a task from the database
    public void DeleteTask(int taskId)
    {
        // Get the connection string to the database
        string connectionString = GetConnectionString();
        // Using statement to ensure the connection is disposed of properly when done or in case of an error
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
        }
    }

    // Mark a task as completed in the database
    public void CompleteTask(int taskId)
    {
        // Get the connection string to the database
        string connectionString = GetConnectionString();
        // Using statement to ensure the connection is disposed of properly when done or in case of an error
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
        }
    }
}