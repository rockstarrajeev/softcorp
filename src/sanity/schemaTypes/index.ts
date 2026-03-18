import { type SchemaTypeDefinition } from 'sanity'
import { companyInfo } from './companyInfo' // 1. Import it

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [companyInfo], // 2. Add it here
}