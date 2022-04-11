//promise(resolve(result), reject(error))

let promise = new Promise(function(resolve, reject){
    //code the promise should implement
    setTimeout(
        // ()=>resolve("Data fetched successfully"), 2000
        ()=>reject("Not Done"), 2000 //reject throws an error
    )
});

//.then .catch .finally

promise
    .then(
        //result err
        (result) => console.log(result),
        // (err) => console.log(err)
    )
    .catch(
        (err) => console.log(err)
    )
    .finally(
        () => console.log("Always runs")
    )