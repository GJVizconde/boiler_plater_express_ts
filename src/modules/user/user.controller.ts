import { Request, Response } from 'express'

const getUsers = (_req: Request, res: Response): void => {
  try {
    // const users = getAllUsers
    res.status(200).json('Esto en getUsers')
  } catch (error) {
    res.status(400).json(error)
  }
}

export { getUsers }
