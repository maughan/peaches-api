import mongoose from 'mongoose'
import { $Substance } from '../types/substance'

const SubstanceSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  classification: {
    type: String,
  },
  symptoms: {
    type: Array,
  },
  information: {
    type: Array,
  },
})

const SubstanceModel = mongoose.model<$Substance>('substance', SubstanceSchema)

export { SubstanceSchema, SubstanceModel }