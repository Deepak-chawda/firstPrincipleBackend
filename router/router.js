const router = require("express").Router()
// require controller file here
const {
    fetchTestimonialController,
    addTestimonialController,
    editTestimonialController,
    deleteTestimonialController
} = require("../controller/controller")
// fetch 
router.get("/api/get/Testimonial",fetchTestimonialController);
// add 
router.post("/api/add/Testimonial",addTestimonialController);
// edit
router.put("/api/Edit/Testimonial",editTestimonialController);
// delete
router.delete("/api/delete/Testimonial",deleteTestimonialController);

// here exports all router for using other place
module.exports = router;
