const mongoose = require('mongoose');
const clientsSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true
        
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        unique: true,
        required: true,
    },
    address:{
        country:{
            type: String,
        },
        city:{
            type: String,
        },
        street:{
            type: String,
        },
        province:{
            type: String,
        },
        zip:{
            type: String,
        },
    },
    shippingAddress:{
        country:{
            type: String,
        },
        city:{
            type: String,
        },
        street:{
            type: String,
        },
        province:{
            type: String,
        },
        zip:{
            type: String,
        },
    }
  });
  const Clients = mongoose.model('Client', clientsSchema);

  module.exports = Clients