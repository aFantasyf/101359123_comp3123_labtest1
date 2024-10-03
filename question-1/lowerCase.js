const lowerCaseWords = (mixArr) => {
    return new Promise((resolve, reject) => {
        let mixedArray = mixArr.filter(v => {
            return typeof v ==="string"
        })
        if (mixedArray.length > 0){
            resolve(mixedArray.map(v => v.toLowerCase()));
        } else {
            reject("Failure.")
        }
    })
}

lowerCaseWords([1,4,"my", 5, "naMe", 7, 9,"Is", 1501, 24, "Aayan!"])
    .then((val) =>{
        console.log("Success " + val)
    })
    .catch((val) => {
        console.log("Failure" + val)
    })


