var express = require('express'),
    app = express();

app.get('/', function (req, res) {
    res.send('Hello World 123');
});

app.listen(80);