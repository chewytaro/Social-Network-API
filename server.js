const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3008;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODV_URI || 'mongodb://localhost/snetwork', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(require('./routes'));

app.listen(PORT, () => console.log(`Connected localhost:${PORT}`));
