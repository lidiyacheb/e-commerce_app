const express = require('express');
const app = express();
var pg = require('pg');
var morgan = require('morgan')

app.use(morgan("common"));
app.use(express.json());


var pool = new pg.Pool({
    user: 'ayfojtcc',
    host: 'suleiman.db.elephantsql.com',
    database: 'ayfojtcc',
    password: 'z6QtwdqX-mZyHNaQ-R6YywxlOAUK41ju',
    port: 5432
  });

console.log(pool);



const PORT = process.env.PORT || '4000';

app.listen(PORT, () => {
    console.log(`server successfully running on PORT ${PORT}`);
});
