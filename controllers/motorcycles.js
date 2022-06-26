import { Motorcycle } from "../models/motorcycle.js"

function index(req, res) {
  Motorcycle.find({})
  .then(motorcycles => {
    res.render("motorcycles/index", {
      motorcycles: motorcycles,
      title: "All Motorcycles",
      user: req.user,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}



export {
  index,
}