const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = process.env.PORT || 3000;
let User = require('./todo.model');
let Mydata = require('./mydata.model');
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/user', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

todoRoutes.route('/mydata_add').post(function (req, res) {
    console.log("request : ", req.body)
    let mydata = new Mydata(req.body);
    mydata.save()
        .then(todo => {
            res.status(200).json({ 'todo': 'todo added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

todoRoutes.route('/mydata_show').get(function (req, res) {
    // console.log('request: ', req);
    Mydata.find(function (err, aa) {
        if (err) {
            console.log("err->", err);
        } else {
            res.json(aa);

        }
    });
});

todoRoutes.route('/mydata_showone/:id').get(function (req, res) {
    Mydata.findById(req.params.id, function (err, mydata) {
        if (err)
            res.status(404).send("data is not found");
        else
        res.json(mydata);
    });
});

todoRoutes.route('/mydata_del/:id').delete(
    function (req, res) {
        let id = req.params.id;
        console.log(id);
        Mydata.deleteOne({ _id: id }, function (err, mydata) {
            res.json(mydata);
        })
    }
);
todoRoutes.route('/mydata_update').post(function (req, res) {
    Mydata.findById(req.body.id, function (err, mydata) {
        if (err)
            res.status(404).send("data is not found");
        else
        mydata.item1 = req.body.item1;
        mydata.item2 = req.body.item2;
        mydata.item3 = req.body.item3;
        mydata.item4 = req.body.item4;
        mydata.item5 = req.body.item5;
        mydata.item6 = req.body.item6;
        mydata.item7 = req.body.item7;

        mydata.save().then(todo => {
            res.json('Todo updated!');
        })
        .catch(err => {
            res.status(400).send("Update not possible");
        });
    });
});

app.use('/todos', todoRoutes);
app.use(express.static('./client/dist'));

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
      
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }
  
app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});