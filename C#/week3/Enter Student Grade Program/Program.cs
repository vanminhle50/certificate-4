using System;
using System.Collections.Generic;

namespace Enter_Student_Grade_Program
{
    // Lớp Student để lưu trữ thông tin học sinh
    class Student
    {
        public string Name { get; set; }
        public double Grade { get; set; }

        // Constructor để khởi tạo tên học sinh và điểm
        public Student(string name, double grade)
        {
            Name = name;
            Grade = grade;
        }

        // Phương thức để hiển thị thông tin học sinh
        public void DisplayGrade()
        {
            Console.WriteLine("Student Name: " + Name);
            Console.WriteLine("Grade: " + Grade);
        }
    }

    // Lớp Program để điều khiển chương trình chính
    internal class Program
    {
        static void Main(string[] args)
        {
            // Tạo danh sách để lưu nhiều học sinh
            List<Student> students = new List<Student>();

            // Nhập số lượng học sinh
            Console.Write("Enter the number of students: ");
            int studentCount = Convert.ToInt32(Console.ReadLine());

            // Lặp qua số lượng học sinh để nhập thông tin
            for (int i = 0; i < studentCount; i++)
            {
                Console.WriteLine($"\nEnter information for student {i + 1}:");

                // Nhập tên và điểm học sinh
                Console.Write("Enter student name: ");
                string studentName = Console.ReadLine();

                Console.Write("Enter grade for " + studentName + ": ");
                double grade = Convert.ToDouble(Console.ReadLine());

                // Tạo đối tượng Student và thêm vào danh sách
                Student student = new Student(studentName, grade);
                students.Add(student);
            }

            // Hiển thị thông tin tất cả học sinh
            Console.WriteLine("\nStudent Grades:");
            foreach (var student in students)
            {
                student.DisplayGrade();
                Console.WriteLine(); // In dòng trống giữa các học sinh
            }
        }
    }
}
