using System;
using Microsoft.Data.Sqlite;

class Program
{
    static void Main()
    {
        // Chuỗi kết nối đến cơ sở dữ liệu SQLite
        string connectionString =
            @"Data Source=C:\certificate-4\certificate-4\C#\week 9\Database\Customers-Database.db;";

        // Lệnh SQL thực hiện JOIN và lọc theo CustomerID
        string query =
            @"
            SELECT a.CustomerID, a.Name AS CustomerName, b.OrderID, b.Product
            FROM CustomerTable a
            JOIN OrdersTable b
            ON a.CustomerID = b.CustomerID
            WHERE a.CustomerID = 1;
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
                        int customerIdIndex = reader.GetOrdinal("CustomerID");
                        int customerNameIndex = reader.GetOrdinal("CustomerName");
                        int orderIdIndex = reader.GetOrdinal("OrderID");
                        int productIndex = reader.GetOrdinal("Product");

                        // Truy cập dữ liệu bằng chỉ mục cột
                        int customerId = reader.IsDBNull(customerIdIndex)
                            ? -1
                            : reader.GetInt32(customerIdIndex);
                        string customerName = reader.IsDBNull(customerNameIndex)
                            ? "N/A"
                            : reader.GetString(customerNameIndex);
                        int orderId = reader.IsDBNull(orderIdIndex)
                            ? -1
                            : reader.GetInt32(orderIdIndex);
                        string product = reader.IsDBNull(productIndex)
                            ? "N/A"
                            : reader.GetString(productIndex);
                        //int CustomerID = reader.IsDBNull(customerIDIndex)
                        //    ? -1
                        //   : reader.GetInt32(customerIDIndex);

                        // Hiển thị dữ liệu
                        Console.WriteLine(
                            $"CustomerID: {customerId}, CustomerName: {customerName}, OrderID: {orderId}, Product: {product}"
                        );
                    }
                }
            }
        }
    }
}
