[TestClass]
public class TestTrapezoid
{
    // EP
    [TestMethod]
    public void Area_ValidDimensions_ReturnsCorrectArea()
    {
        Trapezoid t = new Trapezoid(4, 6, 3, 3, 5);
        double expected = ((4 + 6) / 2) * 5;
        Assert.AreEqual(expected, t.Area(), 0.01);
    }

    [TestMethod]
    public void Perimeter_ValidDimensions_ReturnsCorrectPerimeter()
    {
        Trapezoid t = new Trapezoid(4, 6, 3, 3, 5);
        double expected = 4+6+3+3;
        Assert.AreEqual(expected, t.Perimeter(), 0.01);
    }

    // BVA - Boundary Value Analysis
    // Testing with values close to 0 (lower boundary)
    // and a large suitable value representing upper boundary (not the real double.MaxValue, but still large enough)
    [TestMethod]
    public void Area_BoundarySmallBase()
    {
        Trapezoid t = new Trapezoid(0.0001, 0.0001, 1, 1, 0.0001);
        double expected = ((0.0001 + 0.0001) / 2) * 0.0001;
        Assert.AreEqual(expected, t.Area(), 0.0001);
    }

    [TestMethod]
    public void Perimeter_BoundaryLargeValues()
    {
        Trapezoid t = new Trapezoid(10000, 10000, 20000, 20000, 10000);
        double expected = 60000;
        Assert.AreEqual(expected, t.Perimeter(), 0.01);
    }

    // Negative
    [TestMethod]
    [ExpectedException(typeof(ArgumentException))]
    public void Constructor_NegativeHeight_ThrowsException()
    {
        Trapezoid t = new Trapezoid(4, 6, 3, 3, -1);
    }

    [TestMethod]
    [ExpectedException(typeof(ArgumentException))]
    public void Constructor_ZeroBase1_ThrowsException()
    {
        Trapezoid t = new Trapezoid(0, 6, 3, 3, 5);
    }
}
