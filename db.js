const mongoose = require('mongoose');

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        };
        await mongoose.connect(
            "mongodb://localhost/TODO",
            connectionParams
        );
        console.log('Connecté à la base de données.')
    } catch (error) {
        console.log("Impossible de se connecter à la base de données.", error)
    }
}