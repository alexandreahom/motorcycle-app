import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: String,
}, {
  timestamps: true
})

const motoSchema = new Schema({
  name: String,
  make: {
    type: String,
  },
  model: {
    type: Object,
  },
  mspr: {
    type: Number,
  },
  horsepower: {
    type: Number,
  },
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  
  reviews: [reviewSchema]
}, {
  timestamps: true
})

const Motorcycle = mongoose.model('Motorcycle', motoSchema)

export {
  Motorcycle
}
