using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tutorial_8
{
    public class ToDoManager
    {
        public class Date
        {
            public int Year;
            public int Month;
            public int Day;

            public Date(int year, int month, int day)
            {
                Year = year;
                Month = month;
                Day = day;
            }

            public override string ToString()
            {
                return $"Day: {Day} - Month: {Month} - Year: {Year}";
            }
        }

        public string Title;
        public Date DueDay;
        public string Status;

        public ToDoManager(string title, Date dueDay, string status)
        {
            Title = title;
            DueDay = dueDay;
            Status = status;
        }

        public void Display()
        {
            Console.WriteLine($"Titile: {Title}, DueDay: {DueDay}, Status: {Status}");
        }

        public void Update()
        {
            Console.WriteLine("Enter Title!");
            Title = Console.ReadLine();
            Console.WriteLine("Enter DueDay!");
            Console.Write("Day = ");
            int day = Convert.ToInt32(Console.ReadLine());
            Console.Write("Month = ");
            int month = Convert.ToInt32(Console.ReadLine());
            Console.Write("Year = ");
            int year = Convert.ToInt32(Console.ReadLine());
            DueDay = new Date(year, month, day);
            Console.WriteLine("Enter Status!");
            Status = Console.ReadLine();
        }
    }
}
