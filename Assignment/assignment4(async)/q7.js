// 7. **Using `async/await` with Promises:**
//  - Rewrite the `delayedLogSequence` function using `async/await` instead of chaining `.then()` methods. Ensure the
// function logs each message with the specified delay

async function delayedLogSequence(messagesAndDelays) {
    for (const [message, delay] of messagesAndDelays) {
        await wait(delay);
        console.log(message);
    }
}

delayedLogSequence([
    ["Message 1", 1000],
    ["Message 2", 2000],
    ["Message 3", 3000]
]);
