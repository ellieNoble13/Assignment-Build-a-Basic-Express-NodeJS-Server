const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.get('/foo', (req, res, next) => {
    const random= Math.random();
    if (random > 0.5) {
        res.send('sometimes this');
    } else {
        next('route');
    }
})

app.get('/foo', (req, res) => {
    res.send('and sometimes that')
})

app.get('/user/:username' , (req, res) => {
    const name= req.params.username;
    res.send("hello " + name);
})

app.get(/user(name)?/, (req, res) => {
    res.send('welcome user!')
})

app.get('/query',  (req, res) => {
    const example = req.query.thing;
    const example2 = req.query.other;
    console.log("example", example, "example2", example2);
    res.send("hello " + example2 + "!");
})

app.use((req, res, next) => {
    res.status(404).send("404 - not found");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});