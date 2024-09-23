// 5. **Promise-based Countdown:**
//  - Refactor the `countdown` function to return a Promise that resolves when the countdown completes. Use the `wait`
// function from the previous question to handle the delay between countdown steps.

function countdown(number) {
    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            console.log(number);
            number--;

            if (number < 0) {
                clearInterval(intervalId);
                resolve();
            }
        }, 1000);
    });
}

countdown(5).then(() => console.log("Countdown finished!"));
