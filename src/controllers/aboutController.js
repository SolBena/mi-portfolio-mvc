//Requiero path
const path = require('path')

//Defino la ruta como objeto literal
const aboutController = {
    about: (req,res) => {
        res.sendFile(path.join(__dirname, '..','views','about.html'))
    },
};


//Exporto para usar en routes
module.exports = aboutController