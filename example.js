//---------------------Simple Synchronous program-------------------//

// const ioFunction = (parameters) => {
//     console.log("Inside I/O function before I/O operation");
//     console.log(() => {"I/O operation Finished"}, 3000);
//     console.log("Inside I/O function after I/O operation");
// }

// console.log("Before I/O function");
// ioFunction('adbs');
// console.log("After I/O function");


// --------------------------- Callback ---------------------------//

console.log("before making I/O operation");


const ioFunction = (paramaters, callbackFunction) => {
    console.log("Inside a time consuming function")
    setTimeout(callbackFunction, 3000);
    console.log(" inside the I/O function ")
};

// const toBeCalled = 

ioFunction('abfjef ', () => {
    console.log("the callback function.");
});
console.log("After the I/O operation is completed"); 

// // --------------------------- Promises ---------------------------//

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {resolve('I/O operation Completed')}, 3000);
// });

// const generalFunc = () => {
//     console.log("Inside general function");
//     promise.then(
//         parameters => console.log(parameters)
//     )
//     .catch(
//         error => console.log(error)
//     )
// }

// generalFunc();
