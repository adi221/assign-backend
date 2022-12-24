import { RequestHandler } from 'express'
import { generalConfig } from '../config'
import { Router } from '../utils/http'
import usersRouter from './usersRouter'

const indexRoute: RequestHandler = (_, res) => {
  res.json({ serviceName: generalConfig.serviceName })
}

const apiRouter = Router()
apiRouter.use('/users', usersRouter)

export { apiRouter, indexRoute }
