const moongoose = require ('mongoose');

const uniqueValidator = require ('mongoose-unique-validator');

//--Modele attendu pour l'inscription ou la connection

const userSchema = moongoose.Schema ({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = moongoose.model('Auth', userSchema);