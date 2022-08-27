const resolveCodeBreaker = (request, secret) => {
    let correct = '';
    let coincidence = '';
    let newSecret = secret.split("");

    for (let i = 0; i < 4; i++) {
        if (request[i] === newSecret[i]) {
            correct = correct + "X";
            newSecret[i] = '/';
        } else if (newSecret.indexOf(request[i]) !== -1) {
            coincidence = coincidence + "-";
            newSecret[newSecret.indexOf(request[i])] = '/';
        }
    }

    return correct + coincidence;
}

module.exports = {
    resolveCodeBreaker
}