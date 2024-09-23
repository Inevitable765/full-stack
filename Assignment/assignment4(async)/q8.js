// 8. **Combining `setTimeout` and Promises:**
//  - Create a function called `randomDelayMessage` that logs a message to the console after a random delay between 1
// and 5 seconds. Use `setTimeout` and a Promise to implement this.

function randomDelayMessage(message) {
    const randomDelay = Math.floor(Math.random() * 5000) + 1000;
    return wait(randomDelay).then(() => console.log(message));
}

randomDelayMessage("Random delay message!");
