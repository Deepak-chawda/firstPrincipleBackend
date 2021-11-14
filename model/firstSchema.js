const mongoose = require("mongoose")
const firstSchema = new mongoose.Schema({
  Testimonial_ID: {
        type: String,
      },
      // Photo: {
      //   type: String,
      //   // required: true,
      // },
      Name: {
        type: String,
        // required: true,
      },
      Post: {
        type: String,
        // required: true,
      },
      Testimonial_Description: {
        type: String,
        // required: true,
      },
      Created_On: {
        type: String,
        // required: true,
      },
      Last_Updated_On: {
        type: String,
        // required: true,
      },
      Active: {
        type: Number,
        // required: true,
      },
})
const doneSchema = new mongoose.model("firstPrincipleSchema",firstSchema)
module.exports = doneSchema