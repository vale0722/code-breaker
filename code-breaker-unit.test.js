const codeBroker = require('./code-breaker');

describe('asserts', () => {
    test('assert all', () => {
        let response = codeBroker.resolve('1234')
        expect(response).toBe('XXXX');
    });

    test('assert any three digits', () => {
        let response = codeBroker.resolve('1238')
        expect(response).toBe('XXX');
    });

    test('assert any two digits', () => {
        let response = codeBroker.resolve('1267')
        expect(response).toBe('XX');
    });

    test('assert any one digit', () => {
        let response = codeBroker.resolve('1789')
        expect(response).toBe('X');
    });
})
