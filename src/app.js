const express = require ('express')
const app = express()
const port = 3000
const rutaMain = require ('./routes/main')
const rutaAbout = require ('./routes/about')

app.use(express.static('public'));

app.listen(port, ()=> {
    console.log("Server corriendo en http://localhost:" + port);
});

app.use('/', rutaMain);
app.use('/about', rutaAbout);