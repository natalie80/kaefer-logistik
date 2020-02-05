const express = require('express');
const http = require('http');
const app = express();
const PORT =  process.env.PORT || 3001;

app.use(express.static('logistik-app'));
const server = http.Server(app);

app.get('/api',  (req, res) => {

    const customers = [
        {id: 1, firstName: 'Kaefer', lastName: 'Angelika'},
        {id: 2, firstName: 'Brad', lastName: 'Traversy'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    ];

    res.json(customers);
    console.log('sent request', res);
});


server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});