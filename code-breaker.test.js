const codeBroker = require('./src/helpers/code_breaker');

describe.each([
    {
        'request': '1234',
        'result': 'XXXX'
    },
    {
        'request': '1230',
        'result': 'XXX'
    },
    {
        'request': '1290',
        'result': 'XX'
    },
    {
        'request': '1790',
        'result': 'X'
    },
    {
        'request': '5790',
        'result': ''
    },
    {
        'request': '4321',
        'result': '----'
    },
    {
        'request': '4132',
        'result': 'X---'
    },
    {
        'request': '2134',
        'result': 'XX--'
    },
    {
        'request': '1243',
        'result': 'XX--'
    }
])('code broker', ({request, result}) => {
    test(result, () => {
        let response = codeBroker.resolveCodeBreaker(request)
        expect(response).toBe(result);
    });
})