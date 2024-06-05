const express = require ('express');
const app = express();
const port = 3000;

app.get('/api/v2/welcome', (req, res) => {
    res.send('Hola como!!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
