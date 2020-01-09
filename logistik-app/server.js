const express = require('express');
const path = require('path');
router = express.Router();

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', (req, res) => {
    return res.send('pong')
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});


router.get("/", function(req, res) {
    var markup = React.renderToString(
        App()
    );

    res.render("index", {
        markup: markup
    });
});



app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.listen(3000);
