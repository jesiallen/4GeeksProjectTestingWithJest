const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("USD to Euro, Euro to Yen", function(){
    const { fromDollarToYen } = require('./app.js')
    const dollars = fromDollarToYen(3.5)
    const expected = (3.5/1.2)*127.9; 
    expect(fromDollarToYen(3.5)).toBe(373.04166666666674);
})

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("Yen to Euro, Euro to Pound", function(){
    const { fromYenToPound } = require('./app.js')
    const dollars = fromYenToPound(3.5)
    const expected = (3.5/127.9)*0.8; 
    expect(fromYenToPound(3.5)).toBe(0.0218921032056294);
})