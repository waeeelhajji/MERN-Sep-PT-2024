const express = require("express")
// console.log(express())
const app = express()


// -- MIDDLEWARE --
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());



// FAKE DB
const users = [
    { firstName: "Wael", lastName: "Hakurei", id: 1 },
    { firstName: "Marisa", lastName: "Kirisame", id: 2 },
    { firstName: "Sanae", lastName: "Kochiya", id: 3 },
    { firstName: "Sakuya", lastName: "Izayoi", id: 4 },
    { firstName: "Momiji", lastName: "Inubashiri", id: 5 }
];


//----- Routing ----
//----------------request--response
const MyCallBackF = (req, res) => {
    res.json(users)

}

// READ ALL 
app.get("/api/users", MyCallBackF)


// CREATE
app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React later
    console.log(req.body)
    // we can push it into the users array for now...
    // later on this will be inserted into a database using a database method
    users.push(req.body);
    res.json(users)
})

// READ ONE
app.get("/api/users/:id", (req, res) => {
    console.log(req.params.id)
    const userById = users.find(user => user.id == req.params.id)
    res.json(userById)
})


// Update User
app.put("/api/users/:id", (req, res) => {
    users.forEach((user, idx) => {
        if (user.id == req.params.id) {
            user = { ...user, ...req.body }
            users[idx] = user
        }
    })
    res.json(users)
})









app.listen(5000, () => { console.log('Server is up and running on port: 5000') })
