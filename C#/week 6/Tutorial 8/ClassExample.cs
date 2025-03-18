using System;

namespace Tutorial_8
{
    public class Car
    {
        public string Model { get; set; }
        public string Color { get; set; }
        public int Year { get; set; }

        public Car(string model, string color, int year)
        {
            Model = model;
            Color = color;
            Year = year;
        }

        public void DisplayInfo()
        {
            Console.WriteLine($"Model: {Model},  ||Color: {Color}  ||Year: {Year}");
        }
    }
}
