const mongoose = require("mongoose");
// string de conexão:
// mongodb://dominio:porta/nome_database
const MONGO_URL = "mongodb://localhost:27017/reprograma";

function connect () {
  // TODO: conectar no nosso mongo usando a MONGO_URL
  // mongoose.connect('mongodb://localhost:27017/reprograma', {useNewUrlParser: true});
  mongoose.connect(MONGO_URL,
    {useNewUrlParser: true},
    function (error) {
      if(error) {
        console.log("Deu erro: ", error)
      }
      else {
        console.log("Conectamos no MongoDB! \o/")
      }
    }
  );
  }
  
module.exports = {connect}