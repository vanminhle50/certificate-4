var costOfItem = 50;
var tax = 10;

function taxCal(costOfItem, tax) {
    return costOfItem + (costOfItem / 100 * tax); // $5
}
taxCal(costOfItem, tax);

var taxCalculator = {
    costOfItem: 50,
    tax: 10,
    addTax: function() {
        return this.costOfItem + (this.costOfItem / 100 * this.tax); // $5
    }
};
taxCalculator.addTax();