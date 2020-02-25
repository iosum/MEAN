const mongoose = require('mongoose');
// used to extend this model's functionality for passport
const plm = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String

    },
    password: {
        type: String

    }
});

// extends this model so it's no longer a regular model but used by passport for user management
// meaning this is not a regular model anymore, it is used for passport-auth
userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);