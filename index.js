const express = require("express");
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("wow, i am excited to learning node,but facing some problem.now it is solved");
});

const users = [
    { id: 1, name: "Abdullah", home: "khulna", student: "programming hero web development" },
    { id: 2, name: "Obaidullah", home: "khulna", student: "dudh vat" },
    { id: 3, name: "Fayjullah", home: "khulna", student: "hefj" },
];

app.get("/users", (req, res) => {
    const search = req.query.search;
    if (search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult);
    }
    else{res.send(users)}
    
});


app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    res.send('inside post');
    console.log('hitting the post', req.body);
    res.json(newUser);
})



app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id-1];
    res.send(user);
})


const fruits = ['mango', 'orange', 'banana', 'lichi'];
app.get('/fruits/:index', (req, res) => {
    const id = req.params.index;
    const fruit = fruits[id]
    res.send(fruit);
})

app.get('/fruits/mango/fazli', (req, res) => {
    res.send('yummy yummy tok tok test')
})











app.listen(port, () => {
    console.log("listening to port", port);
});
