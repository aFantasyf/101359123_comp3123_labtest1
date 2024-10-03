const resolvedPromise = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(() =>{
            resolve('delayed success!')
        }, 500)
    })
}

const rejectedPromise = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(() =>{
            reject('delayed exception!')
        }, 500)
    })
}

resolvedPromise()
    .then((val) => {
        console.log("messaged: " +val)
    })
    .catch((val) => {
        console.log(console.error(error));
    })
rejectedPromise()
    .then((val) => {
        console.log(val)
    })
    .catch((val)=> {
        console.log("error: " +val)
    })
    