import express, { Router } from 'express'
import cors from 'cors'
import http from 'http'
import mongoose from 'mongoose'
import { SubstanceModel } from './models/substance'
import router from './routes/router'

const MONGODB_URI = 'mongodb+srv://admin:459c5b425bbd50d788672eb948b0553b@peaches.ov13d.mongodb.net/dev?retryWrites=true&w=majority'

const startServer = async () => {
  const app = express()
  const port = 4000

  app.use(cors())
  app.use(router)

  const server = http.createServer(app)

  try {
    await mongoose.connect(MONGODB_URI)
  } catch (err: any) {
    throw new Error(err)
  }

  // router.get('/substances', async (req, res) => {
  //   const substances = await SubstanceModel.find()

  //   return void res.send(substances)
  // })

  // router.get('/substance/:_id', async (req, res) => {
  //   const { _id } = req.params

  //   const substance = await SubstanceModel.findById(_id)

  //   if (!substance) return void res.send(404)

  //   return void res.send(substance)
  // })

  server.listen({ port }, () => {
    console.info(`🚀 Server running on port: ${port}`)
  })
}

startServer()