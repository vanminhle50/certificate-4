using System;
using System.Collections.Generic;
using System.Net.Cache;
using static Tutorial_8.Student;

namespace Tutorial_8
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Create a list of cars
            List<Car> cars = new List<Car>
            {
                new Car("Toyota Camry", "Red", 2020),
                new Car("Honda CRV", "Blue", 2019),
                new Car("Ford Ranger", "Black", 2021)
            };

            // Display all cars
            Console.WriteLine("List of Cars:");
            foreach (Car car in cars)
            {
                car.DisplayInfo();
            }

            // Create a list of students
            List<Student> students = new List<Student>
            {
                new Student(
                    1,
                    "Luke",
                    new Student.DayOfBirth(22, 11, 1993),
                    new Student.Address("123", "Main St", "Clayton", "VIC", "3168"),
                    "Luke@gmail.com",
                    new string[] { "Math", "Science" }
                ),
                new Student(
                    2,
                    "John",
                    new Student.DayOfBirth(15, 02, 1992),
                    new Student.Address("456", "Side St", "Melbourne", "VIC", "3000"),
                    "John@gmail.com",
                    new string[] { "Physics", "Chemistry" }
                )
            };

            // Display all students
            Console.WriteLine("\nList of Students:");
            foreach (Student student in students)
            {
                student.DisplayStudent();
            }
            Console.WriteLine(
                "----------------------------------------------------------------------------"
            );
            List<ToDoManager> toDoList = new List<ToDoManager>();
            while (true)
            {
                Console.WriteLine("\n===== TO-DO LIST MANAGER =====");
                Console.WriteLine("1. Add a new task");
                Console.WriteLine("2. Update an existing task");
                Console.WriteLine("3. Exit");
                Console.Write("Choose an option: ");

                string choice = Console.ReadLine();
                int tasks;
                switch (choice)
                {
                    case "1":

                        Console.WriteLine("How many task do you want to add: ");
                        while (true)
                        {
                            try
                            {
                                tasks = Convert.ToInt32(Console.ReadLine());
                                break;
                            }
                            catch (Exception ex)
                            {
                                Console.WriteLine(
                                    "Your value is inappropriately! Please try again!"
                                );
                            }
                        }
                        for (int i = 0; i < tasks; i++)
                        {
                            AddNewTask(toDoList);
                        }
                        Console.WriteLine("The list after add: ");
                        DisplayTasks(toDoList);
                        break;
                    case "2":
                        UpdateTask(toDoList);
                        Console.WriteLine("The list after Update: ");
                        DisplayTasks(toDoList);
                        break;
                    case "3":
                        return; // Exit the program
                    default:
                        Console.WriteLine("Invalid choice! Please try again!");
                        break;
                }
            }
            static void AddNewTask(List<ToDoManager> toDoList)
            {
                Console.Write("Enter Title: ");
                string title = Console.ReadLine();

                Console.Write("Enter Due Date (Day): ");
                int day = Convert.ToInt32(Console.ReadLine());

                Console.Write("Enter Due Date (Month): ");
                int month = Convert.ToInt32(Console.ReadLine());

                Console.Write("Enter Due Date (Year): ");
                int year = Convert.ToInt32(Console.ReadLine());

                Console.Write("Enter Status: ");
                string status = Console.ReadLine();

                ToDoManager.Date dueDate = new ToDoManager.Date(year, month, day);
                ToDoManager newTask = new ToDoManager(title, dueDate, status);

                toDoList.Add(newTask);
                Console.WriteLine("Task added successfully!");
            }

            static void DisplayTasks(List<ToDoManager> toDoList)
            {
                if (toDoList.Count == 0)
                {
                    Console.WriteLine("No tasks available.");
                    return;
                }

                Console.WriteLine("\n===== TO-DO LIST =====");
                for (int i = 0; i < toDoList.Count; i++)
                {
                    Console.Write($"Index in the list: [{i}]    ||");
                    toDoList[i].Display();
                }
            }

            static void UpdateTask(List<ToDoManager> toDoList)
            {
                if (toDoList.Count == 0)
                {
                    Console.WriteLine("No tasks available to update.");
                    return;
                }

                DisplayTasks(toDoList);
                Console.Write("\nEnter the index of the task to update: ");
                int index;
                if (
                    int.TryParse(Console.ReadLine(), out index)
                    && index >= 0
                    && index < toDoList.Count
                )
                {
                    Console.WriteLine("Updating the task...");
                    toDoList[index].Update();
                    Console.WriteLine("Task updated successfully!");
                }
                else
                {
                    Console.WriteLine("Invalid index! Please try again.");
                }
            }
        }
    }
}
