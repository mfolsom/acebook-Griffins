const mongoose = require('mongoose');

const dbName = process.env.NODE_ENV === 'test' ? 'acebook_test' : 'acebook';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(err => console.error(err));

module.exports.dbName = dbName;
