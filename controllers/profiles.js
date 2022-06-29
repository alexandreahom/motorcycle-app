import { Profile } from "../models/profile.js"

function index(req, res) {
    Profile.find({})
    .then(profiles => {
        res.render('profiles/index', {
            profiles,
            title: "Profiles"
        })
    })
}

export {
    index,
}