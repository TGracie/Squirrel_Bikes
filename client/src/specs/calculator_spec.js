const assert = require('assert');
const Calculator = require('../models/calculator.js');

describe('Calculator', function() {
  let calculator1;
  let data;

  beforeEach(function() {
    data = {
      singleTripDistance: '10',
      commutingDays: '5',
      singleTripsPerDay: '2',
      carDiesel: '5',
      carPetrol: '',
      carHybrid: '',
      bus: '4',
      cycle: '1',
    };
    calculator1 = new Calculator();
    calculator1.setData(data);
  });

  it('should have a distance', function() {
    const actual = calculator1.data.singleTripDistance;
    assert.strictEqual('10', actual);
  });

  it('should be able to return total distance', function() {
    const actual = calculator1.totalDistance();
    assert.strictEqual(actual, 100);
  });

  xit('should be able to calculate a worst case scenario', function() {
    const actual = calculator1.worstCase();
    assert.strictEqual(actual, 28.6);
  });

  it('should be able to return single trip number by method', function() {
    const actual = calculator1.handleTripData('carDiesel');
    assert.strictEqual(actual, '5');
  });

  it('should be able to return single trip data', function() {
    const actual = calculator1.totalCarbonUserBreakdown();
    assert.strictEqual(actual, '5');
  });

  it('should be able to return total max carbon object', function() {
    const actual = calculator1.totalCarbonForEachMode();
    assert.strictEqual(actual, '5');
  });

  xit('should be able to calculate emissions', function() {
    const actual = calculator1.emissionsByMode();
    assert.strictEqual('figure out what goes here', actual);
  });
});
