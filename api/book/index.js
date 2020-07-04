import { Router } from 'express'
import { getAllBooks, createBook, editBook, getSingleBook } from './controller'

const router = new Router()

router.get('/', getAllBooks)
router.get('/:id', getSingleBook)
router.post('/', createBook)
router.put('/:id', editBook)

export default router
