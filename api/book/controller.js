import Book from './model'

export const createBook = async (req, res, next) => {
  const { body } = req

  try {
    const book = await Book.create(body)
    return res.status(201).json(book)
  } catch (err) {
    return next(err)
  }
}

export const getAllBooks = async (req, res, next) => {
  try {
    const { keyword } = req.query

    if (keyword) {
      const books = await Book.aggregate([
        {
          $match: {
            $or: [
              { 'authors.fullName': { $regex: keyword, $options: 'i' } },
              { 'genres.title': { $regex: keyword, $options: 'i' } }
            ]
          }
        }
      ])
      return res.status(200).json(books)
    }

    const books = await Book.find({}).lean()
    return res.status(200).json(books)
  } catch (err) {
    return next(err)
  }
}

export const getSingleBook = async (req, res, next) => {
  const { id } = req.params

  try {
    const book = await Book.findById(id)
    return res.status(200).json(book)
  } catch (err) {
    return next(err)
  }
}

export const editBook = async (req, res, next) => {
  const { body } = req
  try {
    const book = await Book.findOneAndUpdate(
      { _id: req.params.id },
      { $set: body },
      { new: true }
    )
    return res.status(200).json(book)
  } catch (err) {
    return next(err)
  }
}
