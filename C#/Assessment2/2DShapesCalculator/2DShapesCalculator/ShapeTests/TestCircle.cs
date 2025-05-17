[TestClass]
public class TestCircle
{
    // EP - Valid Partition
    [TestMethod]
    public void Area_ValidRadius_ReturnsCorrectArea()
    {
        Circle c = new Circle(5.0); // valid partition
        double expected = Math.PI * 25;
        Assert.AreEqual(expected, c.Area(), 0.01);
    }

    [TestMethod]
    public void Perimeter_ValidRadius_ReturnsCorrectPerimeter()
    {
        Circle c = new Circle(5.0);
        double expected = 2 * Math.PI * 5;
        Assert.AreEqual(expected, c.Perimeter(), 0.01);
    }

    // BVA - Boundary Value Analysis
    // Testing with values close to 0 (lower boundary)
    // and a large suitable value representing upper boundary (not the real double.MaxValue, but still large enough)
    [TestMethod]
    public void Area_BoundaryRadiusSmallPositive()
    {
        Circle c = new Circle(0.0001);
        double expected = Math.PI * 0.0001 * 0.0001;
        Assert.AreEqual(expected, c.Area(), 0.0001);
    }

    [TestMethod]
    public void Perimeter_BoundaryRadiusLarge()
    {
        Circle c = new Circle(10000);
        double expected = 2 * Math.PI * 10000;
        Assert.AreEqual(expected, c.Perimeter(), 0.01);
    }

    // Negative Testing
    [TestMethod]
    [ExpectedException(typeof(ArgumentException))]
    public void Constructor_NegativeRadius_ThrowsArgumentException()
    {
        Circle c = new Circle(-5); // Expect exception to be thrown
    }

    [TestMethod]
    [ExpectedException(typeof(ArgumentException))]
    public void Constructor_ZeroRadius_ThrowsArgumentException()
    {
        Circle c = new Circle(0); // Expect exception to be thrown
    }
}
