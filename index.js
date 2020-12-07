const express = require('express');
const app = express();
var pg = require('pg');
const PORT = process.env.PORT || '4000';

app.listen(PORT, () => {
    console.log(`server successfully running on PORT ${PORT}`);
});
