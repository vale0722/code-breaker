const codeBroker = require('./src/helpers/code_breaker');

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

    test('all position different', () => {
        let response = codeBroker.resolve('2143')
        expect(response).toBe('----');
    });

    test('three positions different and assert any one digit', () => {
        let response = codeBroker.resolve('1423')
        expect(response).toBe('X---');
    });

    test('two positions different and assert any two digit', () => {
        let response = codeBroker.resolve('1243')
        expect(response).toBe('XX--');
    });

    test('three positions different', () => {
        let response = codeBroker.resolve('9143')
        expect(response).toBe('---');
    });

    test('two positions different', () => {
        let response = codeBroker.resolve('8912')
        expect(response).toBe('--');
    });

    test('two positions different', () => {
        let response = codeBroker.resolve('8910')
        expect(response).toBe('-');
    });

    test('empty', () => {
        let response = codeBroker.resolve('7890')
        expect(response).toBe('');
    });

    test('assert one digit but is duplicate', () => {
        let response = codeBroker.resolve('1195')
        expect(response).toBe('X');
    });

    test('assert two digit but is duplicate', () => {
        let response = codeBroker.resolve('1212')
        expect(response).toBe('XX');
    });

    test('assert one digit two different', () => {
        let response = codeBroker.resolve('1329')
        expect(response).toBe('X--');
    });

    test('assert one digit one different', () => {
        let response = codeBroker.resolve('1829')
        expect(response).toBe('X-');
    });

    test('assert two digit one different', () => {
        let response = codeBroker.resolve('1249')
        expect(response).toBe('XX-');
    });

    test('assert one digit one different', () => {
        let response = codeBroker.resolve('1939')
        expect(response).toBe('X-');
    });
})
