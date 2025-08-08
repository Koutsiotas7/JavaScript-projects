/* Async: Makes a function return a promise
   Await: Makes an async function wait for a promise.
   Allows you to write asynchronous code in a synchronous manner.
   Async doesn't have resolve or reject parameters. Everything
   after Await is placed in an event queue. */

function walkDog(){

    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const dogWalked = true;
        if(dogWalked){
            resolve("You walk the dog.");
        }
        else{
            reject("Dog is not walked.");
        }
    }, 1500);
    });
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const kitchenCleaned = true;
        if(kitchenCleaned){
            resolve("You clean the kitchen.");
    }
    else{
        reject("Kitchen is not cleaned...");
    }
    }, 2500);
    });
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const trashTakenOut = false;
        if(trashTakenOut){
            resolve("You take out the trash.");
        }
        else{
            reject("Trash is not taken out.");
        }
    }, 500);
    });
}

async function doChores(){
    try{
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("We are done with chores!")
    }
    catch(error){
        console.error(error);
    }
}

doChores();