const names: Array<string> = [];


const promise: Promise<any> = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('This is done!');
    }, 2000)
});

promise.then(data => {
    data.split(' ');
})
