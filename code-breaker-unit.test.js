const codeBroker = require('./src/helpers/code_breaker');

describe('asserts', () => {
    test('assert all', () => {
        let response = codeBroker.resolveCodeBreaker('1234', '1234')
        expect(response).toBe('XXXX');
    });

    test('assert any three digits', () => {
        let response = codeBroker.resolveCodeBreaker('1238', '1234')
        expect(response).toBe('XXX');
    });

    test('assert any two digits', () => {
        let response = codeBroker.resolveCodeBreaker('1267', '1234')
        expect(response).toBe('XX');
    });

    test('assert any one digit', () => {
        let response = codeBroker.resolveCodeBreaker('1789', '1234')
        expect(response).toBe('X');
    });

    test('all position different', () => {
        let response = codeBroker.resolveCodeBreaker('2143', '1234')
        expect(response).toBe('----');
    });

    test('three positions different and assert any one digit', () => {
        let response = codeBroker.resolveCodeBreaker('1423', '1234')
        expect(response).toBe('X---');
    });

    test('two positions different and assert any two digit', () => {
        let response = codeBroker.resolveCodeBreaker('1243', '1234')
        expect(response).toBe('XX--');
    });

    test('three positions different', () => {
        let response = codeBroker.resolveCodeBreaker('9143', '1234')
        expect(response).toBe('---');
    });

    test('two positions different', () => {
        let response = codeBroker.resolveCodeBreaker('8912', '1234')
        expect(response).toBe('--');
    });

    test('two positions different', () => {
        let response = codeBroker.resolveCodeBreaker('8910', '1234')
        expect(response).toBe('-');
    });

    test('empty', () => {
        let response = codeBroker.resolveCodeBreaker('7890', '1234')
        expect(response).toBe('');
    });

    test('assert one digit but is duplicate', () => {
        let response = codeBroker.resolveCodeBreaker('1195', '1234')
        expect(response).toBe('X');
    });

    test('assert two digit but is duplicate', () => {
        let response = codeBroker.resolveCodeBreaker('1212', '1234')
        expect(response).toBe('XX');
    });

    test('assert one digit two different', () => {
        let response = codeBroker.resolveCodeBreaker('1329', '1234')
        expect(response).toBe('X--');
    });

    test('assert one digit one different', () => {
        let response = codeBroker.resolveCodeBreaker('1829', '1234')
        expect(response).toBe('X-');
    });

    test('assert two digit one different', () => {
        let response = codeBroker.resolveCodeBreaker('1249', '1234')
        expect(response).toBe('XX-');
    });

    test('assert one digit one different', () => {
        let response = codeBroker.resolveCodeBreaker('1939', '1234')
        expect(response).toBe('X-');
    });
})
