const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mini_project");
const userSchema=mongoose.Schema({
  username: {
    type: String,
  },
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  posts:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"post"
  }],
  profilepic: {
    type: String,
    default:"default.png"
  }
});

module.exports=mongoose.model('user',userSchema);