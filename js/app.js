function wait(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, duration);
    });
}

async function sleep() {
    const result = await wait(1000);
    console.log(result);
}

sleep();
