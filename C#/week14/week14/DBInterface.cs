using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SQLite;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

class DBInterface
{
    // Get the connection string based on the current application directory.
    public string getConnectionString(string fileName)
    {
        string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, fileName);
        return $@"Data Source={path}";
    }

    public List<Student> readAll()
    {
        List<Student> students = new List<Student>();
        using (var connection = new SQLiteConnection(getConnectionString("HolmesglenInstitute.db")))
        {
            connection.Open();
            var adapter = new SQLiteDataAdapter("SELECT * FROM Student", connection);
            var builder = new SQLiteCommandBuilder(adapter);
            var dataSet = new DataSet();
            adapter.Fill(dataSet, "Student");
            // Get the DataTable from the dataset
            DataTable studentTable = dataSet.Tables["Student"];
            foreach (DataRow row in studentTable.Rows)
            {
                Student s = new Student(row["StudentID"].ToString(), row["Name"].ToString());
                students.Add(s);
            }
        }
        return students;
    }

    public bool AddStudent(Student student)
    {
        using (var connection = new SQLiteConnection(getConnectionString("HolmesglenInstitute.db")))
        {
            connection.Open();
            var adapter = new SQLiteDataAdapter("SELECT * FROM Student", connection);
            var builder = new SQLiteCommandBuilder(adapter);
            var dataSet = new DataSet();
            adapter.Fill(dataSet, "Student");
            DataTable studentTable = dataSet.Tables["Student"];
            DataRow newRow = studentTable.NewRow();
            newRow["StudentID"] = student.StudentID;
            newRow["Name"] = student.Name;
            studentTable.Rows.Add(newRow);
            adapter.Update(dataSet, "Student");
        }
        return true;
    }

    public bool Update(string studentID)
    {
        using (var connection = new SQLiteConnection(getConnectionString("HolmesglenInstitute.db")))
        {
            connection.Open();
            var adapter = new SQLiteDataAdapter("SELECT * FROM Student", connection);
            var builder = new SQLiteCommandBuilder(adapter);
            DataSet dataSet = new DataSet();
            adapter.Fill(dataSet, "Student");
            DataTable studentTable = dataSet.Tables["Student"];
            DataRow[] rows = studentTable.Select($"StudentID={studentID}");
            if (rows.Length > 0)
            {
                Console.WriteLine("Student ID existed");
            }
        }
        return true;
    }
}
