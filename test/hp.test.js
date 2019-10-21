import { scoreHp } from '../results/scorehp.js';

const test = QUnit.test;

QUnit.module('user health');

test('health is less than 60 returns bad health', function(assert) {
    
    const expected = 'bad health';
    
    const hp = 50;
    const result = scoreHp(hp);

    assert.equal(expected, result);
});
test('health is greater than 60 returns healthy', function(assert) {

    const expected = 'healthy';

    const hp = 100;
    const result = scoreHp(hp);

    assert.equal(expected, result);
});
test('health is 0 returns dead', function(assert) {
  
    const expected = 'dead';

    const hp = 0;
    const result = scoreHp(hp);

    assert.equal(expected, result);
});
