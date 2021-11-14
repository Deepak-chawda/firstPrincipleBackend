const { v4: uuidv4 } = require('uuid');
const doneSchema = require("../model/firstSchema")
// get testimonial
exports.fetchTestimonialController = async (req, res) => {
    try {
      const testimonialfetched = await doneSchema.find();
      res.json({ data: testimonialfetched, error: null, code: 200 });
    } catch (error) {
      console.log("error =>", error);
      res.json({ error: "something went wrong", data: null, code: 500 });
    }
  };
// add testimonial
exports.addTestimonialController = async (req, res) => {
    try {
      const addTestimonial = new doneSchema({
        Testimonial_ID: uuidv4(),
        // Photo: req.body.picture,
        Name: req.body.yourName ,
        Post: req.body.post,
        Testimonial_Description: req.body.discription,
        Created_On : req.body.CreatedOn,
        Last_Updated_On :req.body.LastUpdatedOn,
        // Last_Updated_On :"2h ago",
        Active : req.body.activeValue,
      });
      await addTestimonial.save();
      res.json({
        data: addTestimonial,
        msg: "Added product successfully",
        error: null,
        code: 200,
      });
    } catch (error) {
      console.log("error =>", error);
      res.json({ error: "something went wrong", data: null, code: 500 });
    }
  };
//   edit testimonial
  exports.editTestimonialController = async (req, res) => {
    const getbody = {
      Name : req.body.yourName,
      Post : req.body.post,
      Testimonial_Description : req.body.discription,
      Created_On : req.body.CreatedOn,
    }
    const getId =  req.query._id;
    // const cloudId = req.query.cloudId;
    try {
        await doneSchema.findByIdAndUpdate(
          { _id: getId },
          { $set: getbody },
          { new: true }
        );
        res.json({ msg: "Data updated successfully", error: null, code: 200 });
      }
     catch (error) {
      console.log("error =>", error);
      res.json({ error: "something went wrong", data: null, code: 500 });
    }
  };
//   delete testimonial
  exports.deleteTestimonialController = async (req, res) => {
  
    const productId = req.query._id;
    try {        
      await doneSchema.findByIdAndDelete({ _id: productId });
      res.json({
        msg: "Successfully delete from database",
        error: null,
        code: 200,
      });
    } catch (error) {
      console.log("error =>", error);
      res.json({ error: "something went wrong", data: null, code: 500 });
    }
  };