import { Request, Response } from 'express'

import concerts from '../static-data/concerts.json'

const fetchConcerts = (req: Request, res: Response): void => {
  console.log('request', req.path)
  res.json(concerts)
}

export default fetchConcerts