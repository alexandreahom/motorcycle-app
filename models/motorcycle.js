import mongoose from 'mongoose'

const Schema = mongoose.Schema

const motoSchema = new Schema({
  brand: {
    type: String,
  },
  mspr: {
    type: Number,
  },
  horsepower: {
    type: Number,
  },
  displacement: {
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
