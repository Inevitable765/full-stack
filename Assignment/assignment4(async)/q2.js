// 2. **Basic `setInterval`:**
//  - Create a function called `countdown` that takes a number as an argument. Use `setInterval` to log the countdown
// from that number to zero, decrementing by 1 every second. Stop the interval when it reaches zero.

function countdown(number) {
    const intervalId = setInterval(() => {
        console.log(number);
        number--;

        if (number < 0) {
            clearInterval(intervalId);
        }
    }, 1000);
}

countdown(5);
