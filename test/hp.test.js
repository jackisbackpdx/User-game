import { scoreHp } from '../scorehp.js';
// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('health is less than 60 returns bad health', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 'bad health';
    //Act 
    // Call the function you're testing and set the result to a const
    const hp = 50;
    const result = scoreHp(hp);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
test('health is greater than 60 returns healthy', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 'healthy';
    //Act 
    // Call the function you're testing and set the result to a const
    const hp = 100;
    const result = scoreHp(hp);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
test('health is 0 returns dead', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 'dead';
    //Act 
    // Call the function you're testing and set the result to a const
    const hp = 0;
    const result = scoreHp(hp);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
