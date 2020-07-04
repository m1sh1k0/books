import { Router } from 'express'
import book from './book'

const router = new Router()
router.use('/book', book)

export default router
