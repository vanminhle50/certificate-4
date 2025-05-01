using Microsoft.Data.Sqlite;

namespace Week10_DataBase
{
    class Program
    {
        static void Main()
        {
            // Chuỗi kết nối đến cơ sở dữ liệu SQLite
            string connectionString =
                @"Data Source=C:\certificate-4\certificate-4\C#\Week10\HolmesglenInstitute.db;";

            // Lệnh SQL thực hiện JOIN và lọc theo CustomerID
            string query =
                @"
            SELECT
            enroll.EnrollmentID, 
            enroll.StudentID_FK AS StudentID,
            s.Name AS StudentName,
            enroll.SubjectID_FK AS SubjectID,
            su.Title AS SubjectTitle
            FROM Enrollment enroll
            JOIN Student s
            ON enroll.StudentID_FK=s.StudentID
            JOIN Subject su
            ON enroll.SubjectID_FK=su.SubjectID;
        ";

            // Mở kết nối và thực thi truy vấn
            using (SqliteConnection connection = new SqliteConnection(connectionString))
            {
                connection.Open();

                using (SqliteCommand command = new SqliteCommand(query, connection))
                {
                    using (SqliteDataReader reader = command.ExecuteReader())
                    {
                        // Đọc và hiển thị dữ liệu
                        while (reader.Read())
                        {
                            // Sử dụng GetOrdinal để lấy chỉ mục của các cột
                            int EnrollmentIDIndex = reader.GetOrdinal("EnrollmentID");
                            int StudentIDIndex = reader.GetOrdinal("StudentID");
                            int StudentNameIndex = reader.GetOrdinal("StudentName");
                            int SubjectIDIndex = reader.GetOrdinal("SubjectID");
                            int SubjectTitleIndex = reader.GetOrdinal("SubjectTitle");

                            // Truy cập dữ liệu bằng chỉ mục cột
                            string EnrollmentID = reader.IsDBNull(EnrollmentIDIndex)
                                ? "N/A"
                                : reader.GetString(EnrollmentIDIndex);
                            string StudentID = reader.IsDBNull(StudentIDIndex)
                                ? "N/A"
                                : reader.GetString(StudentIDIndex);
                            string StudentName = reader.IsDBNull(StudentNameIndex)
                                ? "N/A"
                                : reader.GetString(StudentNameIndex);
                            string SubjectID = reader.IsDBNull(SubjectIDIndex)
                                ? "N/A"
                                : reader.GetString(SubjectIDIndex);
                            string SubjectTitle = reader.IsDBNull(SubjectTitleIndex)
                                ? "N/A"
                                : reader.GetString(SubjectTitleIndex);

                            // Hiển thị dữ liệu
                            Console.WriteLine(
                                $"EnrollmentID: {EnrollmentID}, StudentID: {StudentID}, StudentName: {StudentName}, Subject ID: {SubjectID}, Subject Title: {SubjectTitle}"
                            );
                        }
                    }
                }
            }
        }
    }
}
