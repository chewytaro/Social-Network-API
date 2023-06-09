const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/snetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(require('./routes'));

app.listen(PORT, () => console.log(`Connected on http://localhost:${PORT}`));
  