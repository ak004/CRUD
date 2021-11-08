const mongoose = require('mongoose')
const uri = "mongodb+srv://mascuud:mascuudabc@cluster0.6ovfi.mongodb.net/EmployeeDB?retryWrites=true&w=majority"
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('connected to the new db altlas')
})
.catch(err => console.log(err))