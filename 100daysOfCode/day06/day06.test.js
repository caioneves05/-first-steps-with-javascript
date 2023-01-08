const {isPrime, nextPrime } = require('./day06');

describe('Testando o próximo número primo', function() {
    
    test('isPrime(11) return true', () => {
        expect(isPrime(11)).toStrictEqual(true);
    });

    test('isPrime(9) return true', () => {
        expect(isPrime(9)).toStrictEqual(false);
    });

    test('nextPrime(9) return 11', () => {
        expect(nextPrime(9)).toStrictEqual(11);
    });

    test('nextPrime(9) return 11', () => {
        expect(nextPrime(11)).toStrictEqual(11);
    });
});