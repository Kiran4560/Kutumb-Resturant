const mongoose = require('mongoose')

mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGO_URL, () => {
//   console.log("Connected to MongoDB");
// });
 mongoose.connect('mongodb://127.0.01:27017/food-ordering', { useNewUrlParser: true })
    .catch(e => {
       console.error('Connection error', e.message)
    });
const db=mongoose.connection
module.exports = db