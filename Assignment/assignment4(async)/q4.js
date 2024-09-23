// 4. **Using Promises with `setTimeout`:**
//  - Write a function called `wait` that returns a Promise. The Promise should resolve after a delay (in milliseconds) that is
// passed as an argument to the function. Test this function by logging a message to the console once the promise
// resolves.

function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

// Example usage:
wait(2000).then(() => console.log("Waited 2 seconds!"));
