let myPromse = new Promise(function (resolve, reject) {
    //return the title of the current page
    let isTitleReceived = false;
    if (isTitleReceived) {
        resolve('Print the title');
    } else {
        reject('Title not printed');
    }
});

myPromse.then(function (resolvetext) {
    console.log(resolvetext);
}).catch(function (rejecttext) {
    console.log(rejecttext);
});
