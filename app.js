let express = require('express');

let app = express();
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/index.html');
});

app.listen(8000 || process.env.PORT , function() {
    console.log('Server @ '+(8000 || process.env.PORT));
});