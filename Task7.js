// 🔹 Task 1:

console.log("Order placed");

setTimeout(() => {
    console.log("Preparing food")
},2000)

setTimeout(() => {
    console.log("Food ready")
},4000)

setTimeout(() => {
    console.log("Delivered")
},5000)

// 🔹 Task 2:

let count = 0

let clock = setInterval(() => {
    let now = new Date()
    console.log(now.toLocaleTimeString())

    count++

    if (count === 10)
        clearInterval(clock)
        console.log("clock stopped")
}, 1000)

// ⚔️ LEVEL 2 — Intermediate (Callbacks + Async Thinking)

// 🔹 Task 3:

function loginuser(callback){
    setTimeout(() => {
        console.log("User Logged In");
        callback()
    }, 1000)
}

function getUserData(callback){
    setTimeout(() => {
        console.log("User Data Fetched");
        callback()
    }, 1000)
}

function getUserPosts(callback){
    setTimeout(() => {
        console.log("User Posts Fetched");
        callback()
    }, 1000)
}

loginuser(() => {
    getUserData(() => {
        getUserPosts(() => {

        })
    })
})

// 🚀 LEVEL 3 — Promises (Real API Logic)

// 🔹 Task 4:

function getProducts() {
    return new Promise((resolve,reject) => {
        let success = true

        setTimeout(() => {
            if (success){
                resolve([
                {id: 1, name: "shirt"},
                {id: 2, name: "Shoes"}
                ])
            } else {
                reject("API Failed")
            
            }
        },2000)
    })
}

getProducts()
    .then((data) => {
        console.log("Products:", data);
    })

    .catch((error) => {
        console.log(error);
    })

    .finally(() => {
        console.log("Request Completed");
        
    })