import { Request, Response } from 'express'

const getPosts = (_req: Request, res: Response): void => {
  try {
    // const posts = getAllPosts()
    res.status(200).json('NYI: getAllPosts')
  } catch (error) {
    res.status(400).json(error)
  }
}

export { getPosts }
