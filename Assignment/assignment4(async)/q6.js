// 6. **Chaining Promises:**
//  - Create a function `delayedLogSequence` that takes an array of messages and delays (in milliseconds). The function
// should use Promises to log each message to the console in sequence, waiting for the specified delay between each log.

function delayedLogSequence(messagesAndDelays) {
    let promise = Promise.resolve();

    messagesAndDelays.forEach(([message, delay]) => {
        promise = promise.then(() => {
            return wait(delay).then(() => console.log(message));
        });
    });

    return promise;
}

delayedLogSequence([
    ["Message 1", 1000],
    ["Message 2", 2000],
    ["Message 3", 3000]
]);
