import { Router } from 'express'
import userRouter from '../modules/user/user.router'
import postRouter from '../modules/post/post.router'

const mainRouter = Router()

mainRouter.use('/user', userRouter)
mainRouter.use('/post', postRouter)

export default mainRouter
