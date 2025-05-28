[TestClass]
public class TestSquare
{
    // EP - Valid Partition
    [TestMethod]
    public void Area_ValidSide_ReturnsCorrectArea()
    {
        Square s = new Square(4);
        double expected = 16.0;
        Assert.AreEqual(expected, s.Area(), 0.01);
    }

    [TestMethod]
    public void Perimeter_ValidSide_ReturnsCorrectPerimeter()
    {
        Square s = new Square(4);
        double expected = 16.0;
        Assert.AreEqual(expected, s.Perimeter(), 0.01);
    }

    // BVA - Boundary Value Analysis
    // Testing with values close to 0 (lower boundary)
    // and a large suitable value representing upper boundary (not the real double.MaxValue, but still large enough)
    [TestMethod]
    public void Area_BoundarySmallSide()
    {
        Square s = new Square(0.0001);
        double expected = 0.00000001;
        Assert.AreEqual(expected, s.Area(), 0.0001);
    }

    [TestMethod]
    public void Perimeter_BoundarySmallSide()
    {
        Square s = new Square(0.0001);
        double expected = 0.0004;
        Assert.AreEqual(expected, s.Perimeter(), 0.0001);
    }

    [TestMethod]
    public void Area_BoundaryLargeSide()
    {
        Square s = new Square(10000);
        double expected = 100000000;
        Assert.AreEqual(expected, s.Area(), 0.01);
    }

    [TestMethod]
    public void Perimeter_BoundaryLargeSide()
    {
        Square s = new Square(10000);
        double expected = 40000;
        Assert.AreEqual(expected, s.Perimeter(), 0.01);
    }

    // Negative
    [TestMethod]
    [ExpectedException(typeof(ArgumentException))]
    public void Constructor_NegativeSide_ThrowsException()
    {
        Square s = new Square(-5);
    }

    [TestMethod]
    [ExpectedException(typeof(ArgumentException))]
    public void Constructor_ZeroSide_ThrowsException()
    {
        Square s = new Square(0);
    }
}
