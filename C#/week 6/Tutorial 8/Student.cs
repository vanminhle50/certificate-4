using System;
using System.Reflection.Emit;
using System.Runtime.InteropServices;

namespace Tutorial_8
{
    public class Student
    {
        //--------------------------------The nested Address class ------------------------------
        public class Address
        {
            public string StreetNumber { get; set; }
            public string StreetName { get; set; }
            public string Suburb { get; set; }
            public string State { get; set; }
            public string ZipCode { get; set; }

            public Address(
                string streetnumber,
                string streetname,
                string suburb,
                string state,
                string zipcode
            )
            {
                StreetNumber = streetnumber;
                StreetName = streetname;
                Suburb = suburb;
                State = state;
                ZipCode = zipcode;
            }

            // Convert A class to string for write to CMD
            public override string ToString()
            {
                return $"{StreetNumber} {StreetName}, {Suburb}, {State} {ZipCode}";
            }
        }

        //public string DOB { get; set; }

        //--------------------------------The nested DOB class ------------------------------
        public class DayOfBirth
        {
            public int Day { get; set; }
            public int Month { get; set; }
            public int Year { get; set; }

            public DayOfBirth(int day, int month, int year)
            {
                Day = day;
                Month = month;
                Year = year;
            }

            public override string ToString()
            {
                return $"{Day} - {Month} - {Year}";
            }
        }

        public int Age(int yearofbirth)
        {
            int currentyear = DateTime.Now.Year;
            return currentyear - yearofbirth;
        }

        //--------------------------------Content Student class ------------------------------
        public int ID { get; set; }
        public string Name { get; set; }
        public DayOfBirth DOB;
        public int currentAge;
        public Address ADDress { get; set; }
        public string Email { get; set; }
        public string[] Subjects { get; set; }

        public Student(
            int id,
            string name,
            DayOfBirth dob,
            Address address, // This is Student.Address type
            string email,
            string[] subjects
        )
        {
            ID = id;
            Name = name;
            DOB = dob;
            currentAge = Age(dob.Year);
            ADDress = address;
            Email = email;
            Subjects = subjects;
        }

        public void DisplayStudent()
        {
            Console.WriteLine(
                $"Student ID: {ID}, Name: {Name}, DOB: {DOB}, Age: {currentAge}, "
                    + $"Address: {ADDress}, Email: {Email}, Subjects: [{string.Join(", ", Subjects)}]"
            );
        }
    }
}
