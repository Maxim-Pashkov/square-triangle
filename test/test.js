import SquareTriangle from '../src/SquareTriangle';

import assert from 'assert';

describe('square triangle', () => {
    it('should null if "a" is empty', () => {
        assert.equal(SquareTriangle.calc(0, 2), null);
    });

    it('should null if "h" is empty', () => {
        assert.equal(SquareTriangle.calc(10, 0), null);
    });

    it('should 50 if a=10 and h=10', () => {
        assert.equal(SquareTriangle.calc(10, 10), 50);
    });

    it('should 66.5 if a=7 and h=19', () => {
        assert.equal(SquareTriangle.calc(7, 19), 66.5);
    });

    // BAD TEST
    it('should 30 if a=10 and h=3', () => {
        assert.equal(SquareTriangle.calc(10, 3), 30);
    });
});