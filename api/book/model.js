import mongoose, { Schema } from 'mongoose'

const Author = new Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: true,
      minlength: 2,
      maxlength: 40
    }
  },
  { timestamps: false, versionKey: false }
)

Author.index({ '$**': 'text' })

const Genre = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      minlength: 2,
      maxlength: 20
    }
  },
  { timestamps: false, versionKey: false }
)

Genre.index({ '$**': 'text' })

const BookSchema = new Schema(
  {
    title: {
      unique: true,
      type: String,
      trim: true,
      required: true,
      minlength: 3,
      maxlength: 50
    },
    description: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 1000
    },
    price: {
      type: Number,
      default: 0
    },
    authors: [Author],
    genres: [Genre]
  },
  {
    timestamps: false,
    versionKey: false
  }
)

BookSchema.index({ '$**': 'text' })

const model = mongoose.model('Book', BookSchema)
export default model
