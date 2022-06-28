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

function show(req, res) {
  Motorcycle.findById(req.params.id)
  .then(motorcycle => {
    res.render('motorcycles/show', {
      title: "Motorcycle Detail",
      motorcycle,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/motorcycles")
  })
}

function edit(req, res) {
  Motorcycle.findById(req.params.id)
  .then(motorcycle => {
    res.render('motorcycles/edit', {
      motorcycle,
      title: "edit"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/motorcycles")
  })
}

function deleteMoto(req, res) {
  Motorcycle.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/motorcycles')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  index,
  create,
  motoNew as new,
  show,
  edit,
  deleteMoto as delete,
  
}