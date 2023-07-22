import express from 'express'
import bodyParser from 'body-parser';

const app= express();

app.use(bodyParser.json())

import todosRoute from './routes/todos';

app.use(todosRoute);

app.listen(3000);