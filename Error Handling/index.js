/* Error: An object created to represent a problem that occurs.
   Occur often with user input or establishing a connection. */

// console.lag("Hello"); Uncaught typeError: console.lag is not a function
// console.lag(x); Uncaught ReferenceError: x not defined

//NETWORK ERRORS
//SECURITY ERRORS
//PROMISE REJECTION

/* try {}: Encloses code that might potentially cause an error.
   catch {}: Catch and handle any thrown errors from try{}
   finally {}: (Optional) Always executes. Used mostly fro clean up,
   examples: close files, close connections, release resources. */

try{
    console.log(x);
}
catch(error){
    console.error(error); //Highlights the error
}
finally{
    console.log("This always works.");
}

try{
    const divvidend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0){
        throw new Error("You cannot divide by zero!!!!!!");
    }

    if(isNaN(divvidend) || isNaN(divisor)){
        throw new Error("Values must be numbers!!!");
    }

    const result = divvidend / divisor;

    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("The end!!!");