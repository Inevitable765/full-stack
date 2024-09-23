// 3. **Clearing Intervals:**
//  - Extend the `countdown` function from the previous question to also accept a callback function that gets executed
// when the countdown reaches zero. Ensure the interval is cleared after the countdown completes

function countdown(number, callback) {
    const intervalId = setInterval(() => {
        console.log(number);
        number--;

        if (number < 0) {
            clearInterval(intervalId);
            if (callback) {
                callback();
            }
        }
    }, 1000);
}

countdown(5, () => console.log("Countdown finished!"));
