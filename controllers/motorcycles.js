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

function motoNew( req, res) {
  res.render('motorcycles/new', {
    title: 'Add Motorcycle'
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Motorcycle.create(req.body)
  .then(motorcycle => {
    res.redirect('/motorcycles')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/motorcycles/new")
  })
}

export {
  index,
  create,
  motoNew as new,

}