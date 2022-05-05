const express = require("express");

const app = express();


app.get('/', (req, res) => {


    // __dirname - משתנה קבוע שמחזיק את הכתובת של הפרויקט הנוכחי
    res.sendFile(__dirname + '/index.html');
});


app.get('/songs', (req, res) => {


    // __dirname - משתנה קבוע שמחזיק את הכתובת של הפרויקט הנוכחי
    res.sendFile(__dirname + '/songs.html');
});


app.get('/photos', (req, res) => {


    // __dirname - משתנה קבוע שמחזיק את הכתובת של הפרויקט הנוכחי
    res.sendFile(__dirname + '/photos.html');
});




app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});