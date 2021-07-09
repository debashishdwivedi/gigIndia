var mongoose = require("mongoose");
var BlogSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  userId: {
    type: String,
    require: true
  }
});


module.exports = BlogModel = mongoose.model("User", BlogSchema);
