const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/send-email-Frontend'));
app.get('https://verify-email-using-otp-backend.herokuapp.com', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/send-email-Frontend/index.html'));
});

app.listen(process.env.PORT || 8082);