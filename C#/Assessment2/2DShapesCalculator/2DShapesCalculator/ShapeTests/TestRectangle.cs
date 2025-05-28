[TestClass]
public class TestRectangle
{
    // EP - Valid Partition
    [TestMethod]
    public void Area_ValidDimensions_ReturnsCorrectArea()
    {
        Rectangle r = new Rectangle(5.0, 3.0);
        double expected = 15.0;
        Assert.AreEqual(expected, r.Area(), 0.01);
    }

    [TestMethod]
    public void Perimeter_ValidDimensions_ReturnsCorrectPerimeter()
    {
        Rectangle r = new Rectangle(5.0, 3.0);
        double expected = 16.0;
        Assert.AreEqual(expected, r.Perimeter(), 0.01);
    }

    // BVA - Boundary Value Analysis
    // Testing with values close to 0 (lower boundary)
    // and a large suitable value representing upper boundary (not the real double.MaxValue, but still large enough)
    [TestMethod]
    public void Area_BoundarySmallLength()
    {
        Rectangle r = new Rectangle(0.0001, 0.0001);
        double expected = 0.0000001;
        Assert.AreEqual(expected, r.Area(), 0.0001);
    }

    [TestMethod]
    public void Perimeter_BoundarySmallLength()
    {
        Rectangle r = new Rectangle(0.0001, 0.0001);
        double expected = 0.0004;
        Assert.AreEqual(expected, r.Perimeter(), 0.0001);
    }

    [TestMethod]
    public void Area_BoundaryLargeValues()
    {
        Rectangle r = new Rectangle(10000, 20000);
        double expected = 10000 * 20000;
        Assert.AreEqual(expected, r.Area(), 0.01);
    }

    [TestMethod]
    public void Perimeter_BoundaryLargeValues()
    {
        Rectangle r = new Rectangle(10000, 20000);
        double expected = 2 * (10000 + 20000);
        Assert.AreEqual(expected, r.Perimeter(), 0.01);
    }

    // Negative Testing
    [TestMethod]
    [ExpectedException(typeof(ArgumentException))]
    public void Constructor_NegativeLength_ThrowsException()
    {
        Rectangle r = new Rectangle(-5, 3);
    }

    [TestMethod]
    [ExpectedException(typeof(ArgumentException))]
    public void Constructor_NegativeLength_ThrowsException1()
    {
        Rectangle r = new Rectangle(5, -3);
    }

    [TestMethod]
    [ExpectedException(typeof(ArgumentException))]
    public void Constructor_ZeroWidth_ThrowsException()
    {
        Rectangle r = new Rectangle(5, 0);
    }

    [TestMethod]
    [ExpectedException(typeof(ArgumentException))]
    public void Constructor_ZeroWidth_ThrowsException1()
    {
        Rectangle r = new Rectangle(0, 3);
    }
}
