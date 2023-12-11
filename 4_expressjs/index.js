const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('Hello World! MUGUNDHAN K V - 7376222IT203'));
app.get('/7376222IT203', (req, res) => res.send('NAME: MUGUNDHAN K V   ROLLNO: 7376222IT203'));
app.get('/7376222IT210', (req, res) => res.send('NAME: NAVEEN KUMAR P   ROLLNO: 7376222IT210'));

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
