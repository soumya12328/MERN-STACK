const mongoose = require('mongoose');

const url = 'mongodb+srv://soumyasharma9935_db_user:soumya5454@cluster0.qrzsbjq.mongodb.net/mydb1?appName=Cluster0'

mongoose.connect(url)

    .then((result) => {
        console.log('database connected');
    })
    .catch((err) => {
        console.log(err);
    });

    module.exports = mongoose;