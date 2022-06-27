import mongoose from 'mongoose'

const Schema = mongoose.Schema

const motoSchema = new Schema({
  name: String,
  make: {
    type: String,
  },
  model: {
    type: String,
  },
  mspr: {
    type: Number,
  },
  horsepower: {
    type: Number,
  },
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Motorcycle = mongoose.model('Motorcycle', motoSchema)

export {
  Motorcycle
}
