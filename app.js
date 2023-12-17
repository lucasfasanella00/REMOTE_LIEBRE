const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

app.listen(port, () => console.log(`http://localhost:${port}`))