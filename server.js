const express = require('express');
const app = express();
const path = require('path');


const port = process.env.PORT || 5000


const publicPath = path.join(__dirname, '/public');

app.use(express.static(publicPath))



app.get('/chorddiag', function (req, res) {
  res.sendFile(publicPath + '/chorddiag.html');
});

app.get('/oil', function (req, res) {
  res.sendFile(publicPath + '/oil.html');
});






app.listen(port, () => {
	console.log('server started ' + port)
})