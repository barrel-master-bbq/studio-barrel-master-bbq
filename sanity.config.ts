import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from './schemaTypes/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'barrel-master-bbq',

  projectId: 'a5ugqam2',
  dataset: 'production',

  plugins: [structureTool({structure: deskStructure})],

  schema: {
    types: schemaTypes,
  },
})
