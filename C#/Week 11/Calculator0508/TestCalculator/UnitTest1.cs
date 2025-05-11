namespace Calculator
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestAdd()
        {
            int a = 5;
            int b = 3;
            BasicMath math = new BasicMath();
            double result = math.Add(a, b);
            double expected = 8;

            Assert.AreEqual(expected, result);
        }
    }
}
