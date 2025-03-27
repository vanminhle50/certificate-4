class CircleCalculator
{
    public double Radius;
    private double PI = 3.1415926;

    public double Circumference(double Radius)
    {
        return 2 * PI * Radius;
    }

    public double Area(double Radius)
    {
        return PI * Radius * Radius;
    }
}
