const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://<usuario>:<senha>@cluster0-rieok.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//app.use(cors({origin:'http://localhost:3000'}))
app.use(cors())
app.use(express.json());
app.use(routes);
//Metodos HTTP:get, post, put , delet

//Tipos de parametros:
//Query Params: request.query (Filtros, ordencao , paginacao,..)
//Route Params: request.params (identificar um recurso na alteracao ou remocao)
//Body Params: request.body (dados para criacao ou alteracao de um registro)

//MongoDB (não-relacional)

app.listen(3333);
